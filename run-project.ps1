$PgInstallDir = "c:\Users\91799\Documents\GitHub\Estate-Showcase\postgres-portable"
$PgSqlDir = "$PgInstallDir\pgsql"
$DataDir = "$PgSqlDir\data"
$LogFile = "$PgSqlDir\pg_server.log"
$PidFile = "$DataDir\postmaster.pid"

# 1. Clean up stale pid file if it exists and process is not running
if (Test-Path $PidFile) {
    Write-Host "Found existing postmaster.pid. Checking if stale..."
    $pidVal = Get-Content $PidFile -TotalCount 1 -ErrorAction SilentlyContinue
    if ($pidVal) {
        try {
            $pidInt = [int]$pidVal.Trim()
            $proc = Get-Process -Id $pidInt -ErrorAction SilentlyContinue
            if (!$proc) {
                Write-Host "Process $pidInt is not running. Deleting stale postmaster.pid..."
                Remove-Item $PidFile -Force
            } else {
                Write-Host "PostgreSQL is already running under PID $pidInt."
            }
        } catch {
            Write-Host "Failed to parse pid value. Deleting postmaster.pid..."
            Remove-Item $PidFile -Force
        }
    } else {
        Remove-Item $PidFile -Force
    }
}

# 2. Start PostgreSQL if not already running
$procTest = Get-Process -Name postgres -ErrorAction SilentlyContinue
if (!$procTest) {
    Write-Host "Starting PostgreSQL server..."
    & "$PgSqlDir\bin\pg_ctl.exe" -D $DataDir -l $LogFile start
    Start-Sleep -Seconds 3
} else {
    Write-Host "PostgreSQL is already running."
}

# 3. Verify PostgreSQL is accepting connections
Write-Host "Verifying database readiness..."
& "$PgSqlDir\bin\pg_isready.exe" -h localhost -p 5432

# 4. Set Environment Variables for DB Push/Seed
$env:DATABASE_URL="postgresql://postgres:postgres@127.0.0.1:5432/estate_vista"
$env:SESSION_SECRET="estate_vista_super_secret_session_key"

# 5. Push DB schema changes
Write-Host "Pushing database schema changes..."
npx pnpm --filter @workspace/db run push

# 6. Seed the database
Write-Host "Seeding database..."
npx pnpm --filter @workspace/scripts run seed

# 7. Start Backend in the background
Write-Host "Starting Backend API Server (Port 8080)..."
$BackendArgs = "-Command `"`$env:DATABASE_URL='postgresql://postgres:postgres@127.0.0.1:5432/estate_vista'; `$env:SESSION_SECRET='estate_vista_super_secret_session_key'; `$env:PORT='8080'; npx pnpm --filter @workspace/api-server run dev`""
Start-Process -FilePath "powershell.exe" -ArgumentList $BackendArgs -NoNewWindow -RedirectStandardOutput "backend.log" -RedirectStandardError "backend.err.log"

# 8. Start Frontend in the background
Write-Host "Starting Frontend Web App (Port 20263)..."
$FrontendArgs = "-Command `"`$env:PORT='20263'; `$env:BASE_PATH='/'; npx pnpm --filter @workspace/real-estate run dev`""
Start-Process -FilePath "powershell.exe" -ArgumentList $FrontendArgs -NoNewWindow -RedirectStandardOutput "frontend.log" -RedirectStandardError "frontend.err.log"

Write-Host "--------------------------------------------------"
Write-Host "All services started!"
Write-Host "Database: port 5432"
Write-Host "Backend API: http://localhost:8080"
Write-Host "Frontend Web: http://localhost:20263"
Write-Host "Logs are being written to backend.log and frontend.log"
Write-Host "Keeping task alive. Do not stop this task."
Write-Host "--------------------------------------------------"

while ($true) {
    Start-Sleep -Seconds 2
}
