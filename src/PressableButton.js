import React,{Component} from 'react';
import {Animated,TouchableWithoutFeedback,View,Text} from 'react-native';

const MIN_SCALE = 0.8;
const MAX_SCALE = 1;
const DURATION = 200;

class PressableButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      buttonScale: new Animated.Value(1)
    }
    this._renderDefault = this._renderDefault.bind(this)
    this.handlePressIn = this.handlePressIn.bind(this)
    this.handlePressOut = this.handlePressOut.bind(this)
  }
  _renderDefault () {
    return (
      <View>
        <Text>Button</Text>
      </View>
    )
  }
  handlePressIn () {
    const {buttonScale} = this.state
    const {minScale,duration} = this.props
    Animated.timing(
      buttonScale,
      {
        toValue: minScale || MIN_SCALE,
        duration: duration || DURATION,
        useNativeDriver: true
      },
    ).start()
  }
  handlePressOut () {
    const {buttonScale} = this.state
    const {duration} = this.props
    Animated.timing(
      buttonScale,
      {
        toValue: MAX_SCALE,
        duration: duration || DURATION,
        useNativeDriver: true
      },
    ).start()
  }
  render () {
    return (
      <Animated.View
        style={{transform: [{scale: this.state.buttonScale}]}}
      >
        <TouchableWithoutFeedback
          onPress={this.props.onPress}
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
          disabled={false}
        >
          {this.props.children || this._renderDefault()}
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  }
}

export default PressableButton;
