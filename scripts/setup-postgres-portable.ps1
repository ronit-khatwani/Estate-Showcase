$PgVersion = "16.3-1"
$DownloadUrl = "https://get.enterprisedb.com/postgresql/postgresql-$PgVersion-windows-x64-binaries.zip"
$InstallDir = "c:\Users\91799\Documents\GitHub\Estate-Showcase\postgres-portable"
$ZipFile = "$InstallDir\postgresql-binaries.zip"

if (!(Test-Path $InstallDir)) {
    New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
}

Write-Host "Starting portable PostgreSQL setup..."
Write-Host "Target Directory: $InstallDir"

if (!(Test-Path "$InstallDir\pgsql\bin\pg_ctl.exe")) {
    if (!(Test-Path $ZipFile)) {
        Write-Host "Downloading PostgreSQL binaries from $DownloadUrl..."
        try {
            Invoke-WebRequest -Uri $DownloadUrl -OutFile $ZipFile -UseBasicParsing
            Write-Host "Download completed successfully."
        } catch {
            Write-Error "Failed to download PostgreSQL binaries. Error: $_"
            exit 1
        }
    }

    Write-Host "Extracting PostgreSQL binaries..."
    try {
        Expand-Archive -Path $ZipFile -DestinationPath $InstallDir -Force
        Write-Host "Extraction completed."
        Remove-Item $ZipFile -Force
    } catch {
        Write-Error "Failed to extract PostgreSQL binaries. Error: $_"
        exit 1
    }
} else {
    Write-Host "PostgreSQL binaries already present."
}

$PgSqlDir = "$InstallDir\pgsql"
$DataDir = "$PgSqlDir\data"
$LogFile = "$PgSqlDir\pg_server.log"

if (!(Test-Path $DataDir)) {
    Write-Host "Initializing PostgreSQL database cluster..."
    & "$PgSqlDir\bin\initdb.exe" -D $DataDir -U postgres --auth-local=trust --auth-host=trust
    Write-Host "Database cluster initialized."
} else {
    Write-Host "Database cluster already initialized."
}

Write-Host "Starting PostgreSQL server..."
& "$PgSqlDir\bin\pg_ctl.exe" -D $DataDir -l $LogFile start

# Wait a moment for server to spin up
Start-Sleep -Seconds 3

Write-Host "Checking if server is running..."
& "$PgSqlDir\bin\pg_isready.exe" -h localhost -p 5432

Write-Host "Creating 'estate_vista' database..."
try {
    # Run createdb, suppressing error if it already exists
    & "$PgSqlDir\bin\createdb.exe" -U postgres -h localhost -p 5432 estate_vista
    Write-Host "Database 'estate_vista' created."
} catch {
    Write-Host "Database 'estate_vista' might already exist."
}

Write-Host "PostgreSQL Setup Completed Successfully!"
Write-Host "Connection URL: postgres://postgres@localhost:5432/estate_vista"
