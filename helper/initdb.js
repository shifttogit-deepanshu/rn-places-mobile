import * as SQLite from 'expo-sqlite';

const initdb = async ()=>{
   const db = SQLite.openDatabase("places.db")

   db.transaction((tx)=>{
        tx.executeSql("CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL,title TEXT NOT NULL,imageUrl TEXT NOT NULL,address TEXT NOT NULL,lat REAL NOT NULL,lng REAL NOT NULL)",[],)
   })
}