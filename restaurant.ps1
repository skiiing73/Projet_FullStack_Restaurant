# Naviguez vers le dossier Back_End et lancez l'API en arrière-plan
Write-Host "Starting API..."
cd .\Back_End
Start-Process node api.js

# Naviguez vers le dossier App_Restaurant et démarrez Angular
Write-Host "Starting Angular application..."
cd ..\App_Restaurant
ng serve
