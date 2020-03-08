import React ,{Component} from 'react';
import {View,Text,Button,StyleSheet, TouchableOpacity} from 'react-native';
import {observer,inject} from 'mobx-react';

 class GameScreen extends Component
{
    constructor(props){
        super(props);
        this.state={board:['','','','','','','','',''],result:""}

    }

render(){
    const isWinner=(bo,le)=>{

             return ((bo[7] == le && bo[8] == le && bo[9] == le) || 

      (bo[3] == le && bo[4] == le && bo[5] == le) || 

      (bo[0] == le && bo[1] == le && bo[2] == le) || 

      (bo[6] == le && bo[3] == le && bo[0] == le) || 

      (bo[7] == le && bo[4] == le && bo[1] == le) || 

      (bo[8] == le && bo[5] == le && bo[2] == le) || 

      (bo[6] == le && bo[4] == le && bo[2] == le) ||

      (bo[8] == le && bo[4] == le && bo[0] == le)) 

    }

    const getDupCopy=(board)=>{
        let dup=[]
        for(var i=0;i<board.length;i++)
        {
            dup.push(board[i]);

        }
return dup;
    }

const isBoardFull=(board)=>{

    for(var i=0;i<10;i++)
    {

             if(isSpaceFree(board, i)){
    
                 return false
    }
    
        
    }
    return true
}

const isSpaceFree=(board,letter)=>{
    return (board[letter]=='');
}



 const getComputerMove=(board, computerLetter)=>{



    let copy=getDupCopy(board);
    
    let copy1=[]



     for(var i=0;i<10;i++){

        copy1 = getDupCopy(board);

      // console.log(copy1);
      // console.log(copy1)

         if(isSpaceFree(copy1, i)){

             copy1[i]='O';
             console.log(isWinner(copy1,'O'))
             if(isWinner(copy1, 'O')){
                 this.setState({board:copy1,result:"Computer Won!"});
                 this.props.store.addToHistory("Lost");

                 console.log("Computer Won1");
                 return "";
             }

    }
}

for(var i=0;i<10;i++){

     copy1 = getDupCopy(board);

     console.log(copy1)

      if(isSpaceFree(copy1, i)){

          copy1[i]='X';


          if(isWinner(copy1, 'X')){
              copy1[i]='O';
              this.setState({board:copy1,result:""});

             // console.log("Computer Won2");
              return "";
          }

 }
}






let move = chooseRandomMoveFromList(board, [0, 2, 6, 8])

//console.log(move);

if(move != null)
{
     copy1=getDupCopy(board);
    copy1[move]='O';
    this.setState({board:copy1,result:""})
    return "";

}





   if(isSpaceFree(board, 5)){ copy1=getDupCopy(board);
    copy1[4]='O';
    this.setState({board:copy1,result:""})
   // console.log(this.state)
    return "";

   }
    copy1=getDupCopy(board);
   copy1[chooseRandomMoveFromList(board, [1, 3, 5, 7])]='O';
   this.setState({board:copy1,result:""});

return "";
}

const chooseRandomMoveFromList=(board,movesList)=>{
   let possibleList=[];
    for(var i=0;i<movesList.length;i++){
        if(isSpaceFree(board,movesList[i]))
        {
            possibleList.push(movesList[i]);
        }

    }

    if(possibleList.length!=0)
    {
        return possibleList[Math.floor(Math.random()*possibleList.length)];
    }

    else {
        return null;
    }

}

    const func=(val)=>{

        if(this.state.result=="")
        {
        

        let copy=this.state.board;
        
        if(isSpaceFree(copy,val)){
        copy[val]='X';
        this.setState({board:copy,result:""});
        console.log(copy);
        if(isWinner(copy,'X'))
        {
            this.setState({board:copy,result:"You Won"})
            this.props.store.addToHistory("Won");
            console.log("you won");
            return;
        }

        else{
            if(isBoardFull(copy)){
                this.setState({board:copy,result:"Match Tied"})
                this.props.store.addToHistory("Tied");
                console.log("Match tied");
                return;
            }     
        }

        getComputerMove(copy,'O');

        if(isWinner(copy,'O')){
            this.setState({board:copy,result:"Computer Won"})
            this.props.store.addToHistory("Lost");
            console.log("Computer Won3");

        }
        else{
            if(isBoardFull(copy))
            {
                this.setState({board:copy,result:"Match Tied"})
                this.props.store.addToHistory("Tied");
                console.log("Match tied")
            }
        }

    }
}
        //console.log(this.state);

    }

    return(
        <View >
            <Text style={{marginLeft:100}}>TIC TAC TOE</Text>
            <View style={{padding:20,marginLeft:50}}>
            <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{width:50,height:50,borderRightWidth:1,borderBottomWidth:1 }} onPress={()=>func(0) } ><View ><Text>{this.state.board[0]}</Text></View></TouchableOpacity>
    <TouchableOpacity style={{width:50,height:50,borderRightWidth:1,borderBottomWidth:1}}  onPress={()=>func(1)} ><View ><Text>{this.state.board[1]}</Text></View></TouchableOpacity>
    <TouchableOpacity  style={{width:50,height:50,borderBottomWidth:1}} onPress={()=>func(2)} ><View ><Text>{this.state.board[2]}</Text></View></TouchableOpacity>

    


                 </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{width:50,height:50,borderRightWidth:1,borderBottomWidth:1}} onPress={()=>func(3)} ><View ><Text>{this.state.board[3]}</Text></View></TouchableOpacity>
    <TouchableOpacity style={{width:50,height:50,borderRightWidth:1,borderBottomWidth:1}} onPress={()=>func(4)} ><View ><Text>{this.state.board[4]}</Text></View></TouchableOpacity>
    <TouchableOpacity  style={{width:50,height:50,borderBottomWidth:1}}  onPress={()=>func(5)}><View ><Text>{this.state.board[5]}</Text></View></TouchableOpacity>

                </View>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{width:50,height:50,borderRightWidth:1}}  onPress={()=>func(6)} ><View ><Text>{this.state.board[6]}</Text></View></TouchableOpacity>
    <TouchableOpacity style={{width:50,height:50,borderRightWidth:1}}  onPress={()=>func(7)} ><View ><Text>{this.state.board[7]}</Text></View></TouchableOpacity>
    <TouchableOpacity  style={{width:50,height:50}}  onPress={()=>func(8)} ><View ><Text>{this.state.board[8]}</Text></View></TouchableOpacity>

                </View>
        </View>
                <View><Text>
                    {this.state.result}
                    </Text>
                    </View>

                <Button style={{margin:2}} title="Play Again" onPress={()=>this.setState({board:["","","","","","","","",""],result:""})}/>

                <Button  title="Profile" onPress={()=>this.props.navigation.navigate('Profile')}/>
            </View>
    )
}

}

export default inject('store')(observer(GameScreen));