import React, { useRef, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Camera } from "expo-camera";
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import styled from 'styled-components/native';

const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
`;

const CameraContainer = styled.View`
    width: 100%;
    height: 100%;
`;

const CameraButton = styled(Button).attrs({
    mode: "contained",
    icon: "camera",
})`
    position: absolute;
    top: 525px;
    left: 140px;
    `;

export const CameraScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef();
    const { user } = useContext(AuthenticationContext);

    const snap = async() => {
        if(cameraRef && cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
            navigation.goBack();
        }
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if(hasPermission == null) {
        return <View/>
    }
    if(hasPermission === false) {
        return <Text>No access to camera</Text>
    }
    
    return(
        <CameraContainer>
            <ProfileCamera 
                ref={(camera) => (cameraRef.current = camera)}
                type={Camera.Constants.Type.front}
                ratio={"16:9"}
                onCameraReady={() => {
                    console.log("Camera Ready")
                }}
            >
                <CameraButton onPress={snap}>Snap!</CameraButton>                
            </ProfileCamera>
        </CameraContainer>
    )
}
