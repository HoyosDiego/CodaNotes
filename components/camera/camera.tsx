import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CameraProps {
  onClose: () => void;
  onPhotoTaken: (uri: string) => void;
}

export function CameraComponent({ onClose, onPhotoTaken }: CameraProps) {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  if (!permission) return <View style={styles.container} />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>
          Necesitamos permiso para usar la cámara
        </Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.text}>Dar Permiso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync({ quality: 0.5 });

      if (data?.uri) {
        setPhoto(data.uri);
      }
    }
  };

  const savePhoto = () => {
    if (photo) {
      onPhotoTaken(photo);
    }
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  if (photo) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: photo }} style={styles.preview} />
        <View style={styles.previewButtonsContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: Colors.mainColor }]}
            onPress={() => setPhoto(null)}
          >
            <Text style={[styles.text, { color: "white" }]}>Repetir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: Colors.lightGreenColor }]}
            onPress={savePhoto}
          >
            <Text style={[styles.text, { color: "white" }]}>Usar Foto</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing} />

      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Ionicons name="close-circle" size={45} color="white" />
      </TouchableOpacity>

      <View style={styles.controlsContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={toggleCameraFacing}
        >
          <Ionicons name="camera-reverse-outline" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.snapButton} onPress={takePicture}>
          <View style={styles.innerSnapButton} />
        </TouchableOpacity>

        <View style={{ width: 55 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 30,
    elevation: 5,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  camera: {
    flex: 1,
  },
  closeButton: {
    left: 20,
    position: "absolute",
    top: 50,
    zIndex: 10,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
  controlsContainer: {
    alignItems: "center",
    bottom: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    left: 0,
    position: "absolute",
    right: 0,
  },
  iconButton: {
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 30,
    padding: 10,
  },
  innerSnapButton: {
    backgroundColor: "white",
    borderRadius: 30,
    height: 60,
    width: 60,
  },
  permissionText: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  preview: {
    flex: 1,
    resizeMode: "contain",
  },
  previewButtonsContainer: {
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    width: "100%",
  },
  snapButton: {
    alignItems: "center",
    borderColor: "white",
    borderRadius: 40,
    borderWidth: 5,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
