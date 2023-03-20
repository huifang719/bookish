# Bookish-Online Book Store
## an E-commerce site built with React and asp .net 

## :white_check_mark: Requirement to run: 
- Visual Studio
- Node&npm
- PSQL 15

- Download :
```zsh
$ git clone https://github.com/huifang719/bookish.git
$ cd bookish
$ dotnet restore
$ cd clientAPP
$ npm i
```
start PSQL terminal
```
CREATE DATABASE bookish;
\c bookish
\password
253344
```

start nuget manage console
```
add-migration InitialMigration -c applicationdbcontext -o data/migrations
Update-Database
```
In terminal, under bookish directory, run:
```
dotnet run
```

## :computer: live site coming soon
## website outlay
![image](https://user-images.githubusercontent.com/112321294/225468821-2a5325bd-964f-4a3c-8433-f2132a29c6db.png)

## :rocket: Cool tech
### using React js for Front-End
- react bootstrap and react icons
- redux toolkit for statemanagement
- integrating react-hook-form and zod for form validation 
- react slick carousel for displaying books
### using asp .net for Back-End
- Entity framework 
- Identity for Authentication and Autherization
- PSQL for data storage and management

## :white_check_mark: Future features
payment system
