import { View } from "react-native";

import { styles } from '../../Styles/ScreenStyle'
import { DatePicker } from "../../components/DatePicker";

export const SelectEventScreen = () => {
    return (
        <View style={styles.container}>
            <DatePicker />
        </View>
    );
};