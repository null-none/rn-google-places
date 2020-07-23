import React, { Component } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Modal, { ModalContent, ModalTitle } from "react-native-modals";

export class AutocompletePlaces extends Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({ visible: visible });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.visible,
    });
  }

  render() {
    return (
      <Modal
        visible={this.state.visible}
        onTouchOutside={() => {
          this.setState({ visible: false });
        }}
        onSwiping={() => {
          this.setState({ visible: false });
        }}
        width={1}
        height={0.7}
        swipeDirection={["down"]}
        swipeThreshold={200}
        modalTitle={<ModalTitle title="Types place" />}
      >
        <ModalContent>
          <GooglePlacesAutocomplete
            placeholder="Example, Jan Breydel Stadium"
            minLength={2}
            autoFocus={true}
            returnKeyType={"none"}
            fetchDetails={true}
            listViewDisplayed="true"
            onPress={(data, details = null) => {
              this.props.place(details);
            }}
            query={{
              key: this.props.apiKey,
              types: "geocode",
              language: "en",
            }}
            styles={{
              textInputContainer: {
                backgroundColor: "rgba(0,0,0,0)",
                borderTopWidth: 0,
                borderBottomWidth: 1,
              },
              listView: {
                marginTop: 50,
                elevation: 1,
                backgroundColor: "white",
                position: "absolute",
                zIndex: 1000,
              },
              textInput: {
                fontSize: 16,
                color: '#000',
              },
            }}
            currentLocation={false}
          />
        </ModalContent>
      </Modal>
    );
  }
}