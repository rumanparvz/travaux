import { Modal, Slider } from "antd";
import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
const ModalPage = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  function onChange(value) {
    console.log('onChange: ', value);
  }
  return (
    <div>
      <p onClick={showModal}>
        <BsFilter /> Filter
      </p>

      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
        <Slider defaultValue={30} tooltipVisible  onChange={onChange}  />,
      </Modal>
    </div>
  );
};

export default ModalPage;
