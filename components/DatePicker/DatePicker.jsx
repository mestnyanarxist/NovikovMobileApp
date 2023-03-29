import { Button, DatePicker as AntdDatePicker } from "antd-mobile";
import { useState } from "react";
import { View } from "react-native";

export const DatePicker = ({onConfirm}) => {
    const [visible, setVisible] = useState(false);
    return (
        <View>
            <Button onClick={() => setVisible(true)}>
                Выбрыть дату
            </Button>
            <AntdDatePicker>
                title = "Календарь"
                visible=[visible]
                onClose={() => {
                    setVisible(false);
                }}
                onConfirm = {onConfirm}
            </AntdDatePicker>
        </View>
    )
}