import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ListView,
  View
} from 'react-native';
class InteractiveArea extends Component{
	constructor(props){
		super(props);
	};
	render(){
		return(
		<View style={styles.interact}>
			<TextInput style={styles.input} placeholder="Enter your next big thing here.">
	        </TextInput>
	        <ListView dataSource={this.props.data} renderRow={(rowData)=><Text style={styles.text}>{rowData}</Text>} />
	    </View>
        );
	}
}

const styles = StyleSheet.create({
	interact:{
		flex: 1, 
		alignItems: 'center',
		backgroundColor: 'white'
	},
	text:{
		color: 'black',
		fontSize: 20,
		margin: 10
	}
});
module.exports = InteractiveArea;