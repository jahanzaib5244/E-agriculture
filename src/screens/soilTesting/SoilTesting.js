import {View, Text, Modal, Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {styles} from './styles';
import Dropdown from '../../component/Dropdown';
import {Checkbox} from 'react-native-paper';
import CheckBox from '../../component/CheckBox';
import AppButton from '../../component/AppButton';
import {color} from 'react-native-reanimated';

export default function SoilTesting() {
  const [select, setselect] = useState({});
  const [selectedValues, setselectedValues] = useState([]);
  const [modal, setmodal] = useState(false);
  console.log(select);
  const sjowModal = () => {
    if (Object.keys(select).length !== 0) {
      setmodal(true);
    } else {
      Alert.alert('Soil Testing', 'Please select the soil type first');
    }
  };
  console.log(selectedValues);
  return (
    <View style={styles.root}>
      <Dropdown
        inputstyle={styles.input}
        label="Soil Type"
        placeholderText="Select land Type..."
        select={item => setselect(item)}
      />
      <CheckBox selectedValue={setselectedValues} />
      <AppButton
        name="Testing"
        onPress={() => sjowModal()}
        BTstyle={styles.btn}
      />
      <Modal
        style={styles.modalstyle}
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setmodal(false);
        }}>
        <View style={styles.innerModel}>
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.modelHeading}>Soil Testing Result</Text>
              <View style={styles.infoTextContainer}>
                <Text style={styles.info}>Selected Soil Type</Text>
                <Text style={styles.des}>{select?.soilType}</Text>
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.info}>Selected Parameters</Text>
                {selectedValues.map((item, index) => {
                  return (
                    <Text style={{color: 'black'}} key={index}>
                      {item}
                    </Text>
                  );
                })}
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.info}>Crops Better for grow</Text>
                <Text style={styles.des}>{select?.crops}</Text>
              </View>
              <View style={styles.infoTextContainer}>
                <Text style={styles.info}>Pestisides/ Fertilizers</Text>
                <Text style={styles.des}>{select?.pestisides}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setmodal(false)}>
                <Text style={styles.closeTxt}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
