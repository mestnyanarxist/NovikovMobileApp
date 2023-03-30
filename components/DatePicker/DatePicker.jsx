import { Button, Picker } from "antd-mobile";
import { useState } from "react";
import { View } from "react-native";
import { styles } from '../../Styles/ScreenStyle'

export const DatePicker = ({onConfirm}) => {
    const [visible, setVisible] = useState(false)
    return (
        <View>
            <Button onClick={() => setVisible(true)}>
                Выбрыть дату
            </Button>
            <Picker
                title = "Календарь"
                visible = {visible}
                colums = {(value) => {[
                        [
                            {label: "1941", value: "1941"},
                            {label: "1942", value: "1942"},
                            {label: "1943", value: "1943"},
                            {label: "1944", value: "1944"},
                            {label: "1945", value: "1945"},
                        ],
                        [
                            {label: "1", value: "1"},
                            {label: "2", value: "2"},
                            {label: "3", value: "3"},
                            {label: "4", value: "4"},
                            {label: "5", value: "5"},
                            {label: "6", value: "6"},
                            {label: "7", value: "7"},
                            {label: "8", value: "8"},
                            {label: "9", value: "9"},
                            {label: "10", value: "10"},
                            {label: "11", value: "11"},
                            {label: "12", value: "12"},
                        ],
                        [
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},
                            {label: "1", value: "1"},

                        ],                        
                    ]
                }}
                onClose = {() => {
                    setVisible(false);
                }}
                onConfirm ={onConfirm} />
        </View>
    )
}