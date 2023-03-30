import { View } from "react-native";

import { styles } from '../../Styles/ScreenStyle'
import { DateSelect } from "../../components/DataParcer";

export const SelectEventScreen = () => {
    return (
        <View style={styles.container}>
            <DateSelect/>
        </View>
    );
};