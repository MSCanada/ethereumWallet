# ethereumWallet
To Install, first set up geteth by running :

./geth --datadir ./mychaindata/ --nodiscover --rpc --rpccorsdomain "*" --rpcapi eth,web3,personal,net
then in another window attach to the process of above :
./geth attach ipc:/home/muhammad/Downloads/eth/mychaindata/geth.ipc then start mining by miner.start(1)

then start mist :
mist --rpc /home/muhammad/Downloads/eth/mychaindata/geth.ipc

then start application by :
ACCOUNT_PASSWORD=MySup4P@ssw0rd truffle deploy

then run front end:
npm run dev

