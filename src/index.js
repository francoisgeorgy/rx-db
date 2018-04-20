import * as R from "ramda";
import PouchDB from "pouchdb";
// import Rx from "rxjs/Rx";

document.addEventListener("DOMContentLoaded", function(event) {

    console.log("rxdb starting...");

    document.getElementById("app").innerText = "rx-db";

    const db = new PouchDB("rx-db");

    console.log(R.isNil(db.then));          //-> false
    console.log(R.is(Function, db.then));   //-> true

    async function getDbInfos() {
        return await db.info();
    }

    console.log(getDbInfos());

    /*
    db.info().then(function(infos) {
        console.log(JSON.stringify(infos));
    }).catch(function (err) {
        console.log(err);
    });

    Rx.Observable.fromEvent(db, 'created')
        .subscribe(() => console.log("Database to accept data"));

    let numbers = Rx.Observable.range(1, 10);
    numbers.subscribe(x => console.log(x));
    */


    /*
    Rx.Observable.from(getTransactionsArray())
        .bufferCount(20)
        .timestamp()
        .map(objs => R.map(R.set(dateLens, objs.timestamp), objs.value))
        .do(txs => console.log(`Processing ${txs.length} transactions`))
        .mergeMap(datedTxs =>
            Rx.Observable.fromPromise(txDb.bulkDocs(datedTxs)))
        .subscribe(
            rec => console.log(`New record created: ${rec.id}`),
            err => console.log(‘Error: ‘ + err),
            () => console.log(‘Database populated!’)
        );
    */



});
