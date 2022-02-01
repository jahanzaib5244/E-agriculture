import { ScrollView, Text } from 'react-native';
import React from 'react';

import { FurtilizerStyle } from './FurtilizerStyle'
import LandCArd from '../../component/LandCard';

export default function Furtilizer() {
  return (
    <ScrollView contentContainerStyle={FurtilizerStyle.root} >
      <LandCArd
        title='land 1'
        futilizer={32}
        fruitName={'onion'}
        LandType={'land 3'}
        water={98 }
        Area={ '6000 meter'}
      />
      <LandCArd
        title='onion field'
        futilizer={100}
        fruitName={'onion field'}
        LandType={'land 1'}
        water={ 4353}
        Area={'8000 meter' }
      />
      <LandCArd
        title='Cucumber'
        futilizer={45}
        fruitName={'Cucumber'}
        LandType={'land 3'}
        water={463 }
        Area={'34000 meter' }
      />
      <LandCArd
        title='Spinach '
        futilizer={13}
        fruitName={'Spinach '}
        LandType={'land 1'}
        water={456 }
        Area={'64000 meter' }
      />
      <LandCArd
        title='Beetroot'
        futilizer={56}
        fruitName={'Beetroot'}
        LandType={'land 4'}
        water={1652}
        Area={'74000 meter' }
      />
      <LandCArd
        title='Olive'
        futilizer={78}
        fruitName={'Olive'}
        LandType={'land 2'}
        water={ 652}
        Area={'54000 meter' }
      />
      <LandCArd
        title='Tomato'
        futilizer={200}
        fruitName={'Tomato'}
        LandType={'land 3'}
        water={ 654}
        Area={ '24000 meter'}
      />
      <LandCArd
        title='Cornn'
        futilizer={42}
        fruitName={'Cornn'}
        LandType={'land 1'}
        water={874 }
        Area={ '18000 meter'}
      />
      <LandCArd
        title='Cauliflower'
        futilizer={87}
        fruitName={'Cauliflower'}
        LandType={'land 2'}
        water={378 }
        Area={'13000 meter' }
      />
      <LandCArd
        title='Cabbage'
        futilizer={98}
        fruitName={'Cabbage'}
        LandType={'land 4'}
        water={ 627}
        Area={ '8000 meter'}
      />
      <LandCArd
        title='Cucumber'
        futilizer={64}
        fruitName={'Cucumber'}
        LandType={'land 2'}
        water={ 973}
        Area={ '2000 meter'}
      />
      <LandCArd
        title='Lemon'
        futilizer={73}
        fruitName={'Lemon'}
        LandType={'land 1'}
        water={678 }
        Area={ '2000 meter'}
      />
      <LandCArd
        title='Radish'
        futilizer={83}
        fruitName={'Radish'}
        LandType={'land 2'}
        water={1000 }
        Area={ '8000 meter'}
      />
      <LandCArd
        title='Okra'
        futilizer={67}
        fruitName={'Okra'}
        LandType={'land 3'}
        water={ 320}
        Area={ '6000 meter'}
      />
    </ScrollView>
  );
}
