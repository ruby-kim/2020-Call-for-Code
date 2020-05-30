import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';


export default function AuthsInfoScreen({ route, navigation }) {
    const title = route.params.title;
    const desc = route.params.desc;
    const allow = route.params.allow;
    const not_allow = route.params.not_allow;

    return (
        <View>
            <View style={styles.title}>
                <Text>{JSON.stringify(title)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.desc}>
                    <Text>{JSON.stringify(desc)}</Text>
                </View>
                <View style={styles.desc}>
                    <Text>인증조건: {JSON.stringify(allow)}</Text>
                </View>
                <View style={styles.desc}>
                    <Text>인증불가: {JSON.stringify(not_allow)}</Text>
                </View>
            </View>
            <Button onPress={() => navigation.goBack()} title={"Back"} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    contentContainer: {
        paddingTop: 15,
    },
    title: {
        margin: 5,
        borderWidth: 1,
    },
    desc: {
        fontSize: 40,
        marginLeft: 10,
    }
});
