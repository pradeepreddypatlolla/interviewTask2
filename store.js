import {observable,action,decorate} from 'mobx';

class Store{
    history=[];

    userName='';

    gameCount=0;
    gamesWon=0;
    gamesLost=0;

    addToHistory(result){
        this.history.push(result);
        this.gameCount++;
        if(result=='Won')
        {
            this.gamesWon++;

        }
        else{
            this.gamesLost++;
        }
    }
    addUserName(name){
        this.userName=name;
    }


}
decorate(Store,{
    history:observable,
    addToHistory:action
})
export default new Store();