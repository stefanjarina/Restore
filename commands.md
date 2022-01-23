# List of commands

## Create projects

```ps
cd backend

dotnet new sln -n ReStore

dotnet new webapi -o API
dotnet sln add API
```

## Set up database

- `dotnet-ef` tool is needed

```ps
dotnet tool install --global dotnet-ef --version 6.0.1
# -or-
dotnet tool update --global dotnet-ef --version 6.0.1
```

### Prepare migrations

```ps
dotnet ef migrations add InitialCreate -o Data/Migrations
```

### Create database

Several options here:

- manually (not covered here)
- manually using dotnet-ef tool
- in code

#### manually using dotnet-ef tool

```ps
dotnet ef database update
```
