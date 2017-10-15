import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

import Button from '../components/CustomButton';

const FAVORITE_LOCATIONS = [
	'HOME',
	'WORK',
	'BOYFRIEND',
	'BESTIE',
	"MOM'S",
	'SAKS'
];

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	top: {
		backgroundColor: '#d1c5c6',
		flex: .1,
		alignItems: 'center',
	},
	topHeader: {
		height: 70,
		width: 100,
	},
});

export default class Favorites extends React.Component {
	static navigationOptions = {
		title: 'Stored Locations',
	};

	changeScreen = () => {
		const { navigate } = this.props.navigation;
		navigate('Buildings');
	}

	render() {
		return (
			<View style={styles.container}>
				{
					FAVORITE_LOCATIONS.map((place, i) => {
						return (
							<Button
								color="gray"
								key={`${place}_${i}`}
								text={place}
							/>
						)
					})
				}
				<Button onPress={this.changeScreen} text={"NONE OF THESE"}/>
			</View>
		);
	}
}
