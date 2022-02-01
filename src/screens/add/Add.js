import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';

import Input from '../../component/Input'
import { AddStyle } from './AddStyle';
import Dropdown from '../../component/Dropdown';
import AppButton from '../../component/AppButton'


export default function Add() {


  const [filtermathod, setfiltermathod] = useState("Aker")
  const [landType, setlandType] = useState("Aker")

  const AreaType = [
    { label: 'Aker', value: "Aker" },
    { label: 'Meter', value: "Meter" },
    { label: 'Feet', value: "Feet" },
  ];


  const Land_type = [
    { label: 'land 1', value: "Aker" },
    { label: 'land 2', value: "Meter" },
    { label: 'land 3', value: "Feet" },
    { label: 'land 4', value: "Feet" },
  ];
  return (
    <ScrollView contentContainerStyle={AddStyle.root}>
      <Input name="Land Name" inputstyle={AddStyle.input}  placeholder='Type a land name...'/>

      <Text style={AddStyle.radioHeading}>Area type</Text>

      <RadioForm
        style={AddStyle.radio}
        radio_props={AreaType}
        animation={true}
        labelColor={'#000'}
        formHorizontal={true}
        labelStyle={AddStyle.radiolabelText}
        buttonColor={'gray'}
        selectedButtonColor={'#000'}
        buttonSize={10}
        buttonOuterSize={20}
        borderWidth={1}
        onPress={(val) => { setlandType(val) }}
      />
      <Input name={`Area in ${landType}`} inputstyle={AddStyle.input} placeholder='Area In numbers...' />

      <Text style={AddStyle.radioHeading}>Land type</Text>

      <RadioForm
        style={AddStyle.radio}
        radio_props={Land_type}
        labelStyle={AddStyle.radiolabelText}
        animation={true}
        labelColor={'#000'}
        formHorizontal={true}
        buttonColor={'gray'}
        selectedButtonColor={'#000'}
        buttonSize={10}
        buttonOuterSize={20}
        borderWidth={1}
        onPress={(val) => { setfiltermathod(val) }}
      />
     
      <Dropdown name='Select Fruit or Vegetable' customstyle={AddStyle.Dropdown} />
      <AppButton name='Calculate' BTstyle={AddStyle.btn} />
    </ScrollView>
  );
}
