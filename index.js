'use strict';

const http = require('http');
const fs = require('fs');

// モジュールhttpを用いて、サーバーを作成
const server = http.createServer((req, res) => {
    // サーバーにリクエストがあった時に呼び出されるコールバック関数

    fs.readFile('./index.html', 'utf-8', (err, data) => { // 第二引数の'utf-8'は無くてもよい？
        // ファイルを読み込み後に呼び出されるコールバック関数

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
    
        res.write(data);
    
        res.end();
    });
    

});

// このHTTPが起動するポートを宣言し、サーバーを起動
const port = 8000;
server.listen(port, () => {
    // サーバーを起動時に実行されるコールバック関数
    console.log('Listening on ' + port);
});
