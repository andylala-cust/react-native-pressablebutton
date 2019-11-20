import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Pressablebutton from 'react-native-pressablebutton';

const App: () => React$Node = () => {
  return (
    <>
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        <Pressablebutton>
          <View style={{justifyContent: 'center',alignItems: 'center',width: 100,height: 40,lineHeight: 40,backgroundColor: '#ee5b66',borderRadius: 5}}>
            <Text style={{fontWeight: 'bold',color: '#fff'}}>Press Me</Text>
          </View>
        </Pressablebutton>
      </View>
    </>
  );
};

export default App;
