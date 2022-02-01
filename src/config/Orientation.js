import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';


export default function Orientation() {

    const [orientation, setorientation] = useState(Dimensions.get('window'));

 


    return {
        ...orientation,
        potrait: orientation.height > orientation.width
    }
}
