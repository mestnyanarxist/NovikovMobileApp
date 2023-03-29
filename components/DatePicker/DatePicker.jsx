import { Button, DatePicker as AntdDatePicker } from "antd-mobile";
import { useState } from "react";
import { View } from "react-native";
import { styles } from '../../Styles/ScreenStyle'

export const DatePicker = ({onConfirm}) => {
    const [visible, setVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Button onClick={() => setVisible(true)}>
                Выбрыть дату
            </Button>
            <AntdDatePicker
                title = "Календарь"
                visible = {visible}
                onClose = {() => {
                    setVisible(false);
                }}
                onConfirm = {onConfirm} />
        </View>
    )
}