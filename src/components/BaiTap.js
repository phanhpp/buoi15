import React, {Component} from 'react';
import {View, Text, Image, FlatList,  RefreshControl} from 'react-native';

import { Button,CardSection, Card, Header} from './common'




export default class BaiTap extends Component {
  constructor(props){
      super(props);
      this.state = {
          data: [
            { id: 1, name: 'Name #1', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg', nal: 'England' },
            { id: 2, name: 'Name #2', add: 'HN', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg', nal: 'England' },
            { id: 3, name: 'Name #3', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' , nal: 'England'},
            { id: 4, name: 'Name #4', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' , nal: 'England'},
            { id: 5, name: 'Name #5', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' , nal: 'Vietnam'},
            { id: 6, name: 'Name #6', add: 'HN', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' , nal: 'Vietnam'},
            { id: 7, name: 'Name #7', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' , nal: 'Vietnam'},
            { id: 8, name: 'Name #8', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' , nal: 'Vietnam'},
            { id: 9, name: 'Name #9', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg', nal: 'Vietnam' },
            { id: 10, name: 'Koko', add: 'HN', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg', nal: 'Japan' },
            { id: 11, name: 'Mini ', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' , nal: 'Japan'},
            { id: 12, name: 'Sake ', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' , nal: 'Japan'},
            { id: 13, name: 'Toto ', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' , nal: 'Japan'},
            { id: 14, name: 'Name ', add: 'HN', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' , nal: 'Japan'},
            { id: 15, name: 'Name ', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' , nal: 'Japan'},
            { id: 16, name: 'Name ', add: 'HN', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' , nal: 'Japan'},
          
          ],
         
          
         
      }
      this.baseState = this.state
    }
   renderEng(){
    newData = this.state.data.filter((item)=> item.nal == 'England')
    this.setState({data: newData})
    
      
   }
   resetForm = () => {
    this.setState(this.baseState)
  }
   
  renderViet(){
    
    miData = this.state.data.filter((item)=> item.nal == 'Vietnam')
    this.setState({ data : miData})
    
   }
  
   renderJa(){
   jaData = this.state.data.filter((item)=> item.nal == 'Japan')
      this.setState({data: jaData})
    
   }
  
  
    render(){
        return (
          
            <Card>
                <Header >
                 
                 <CardSection> 
                   <Button
                 onPress = {() =>this.resetForm()}
                >
                 Reset
                </Button>

                <Button
                 onPress = {() =>this.renderEng()}
                >
                 England
                </Button>
                
                 <Button
                 onPress = {() =>this.renderJa()}
                > 
                 Japan
                </Button>

                 <Button
                 onPress = {() =>this.renderViet()}
                > 
                 Vietnam
                </Button>
                </CardSection>
                </Header>
                
                <FlatList
               data ={this.state.data}
              keyExtractor = { (item,i)=> `${i}`}
               scrollEnabled = {true}
                 onEndReachedThreshold = {0.3}
               renderItem= {
              ({item}) => (
             <View style = {styles.containerStyle}>
             
             <Image 
              style= {{height: 50 , width: 50, marginHorizontal: 10, borderRadius: 25}}
              source = {{uri: item.uri}} />
              
              <View >
                 
              <Text style = {styles.textStyle}>Name: {item.name}</Text>
              <Text style = {styles.textStyle}>Add: {item.add}</Text>

                <Text style = {styles.textStyle}>Nationality: {item.nal}</Text>
              </View>
             </View>
    
           )
        }
        
        />

      </Card>
    )
  }
}
const styles = {
    containerStyle:{
     backgroundColor: '#350F64',
     marginBottom: 10,
     borderRadius: 10,
     padding: 5,
     justifyContent: 'flex-start',//
     flexDirection: 'row',//
     flex: 1,
     marginHorizontal: 10,
     position:'relative'
    },
    textStyle: {
        color: 'white',
        fontWeight: '600',
    }
};