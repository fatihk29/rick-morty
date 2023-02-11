import React, {FC, useRef} from 'react';
import {Button, AlertDialog, Center} from 'native-base';

interface DeleteCVModalProps {
  setIsOpen: any;
}

const DeleteCVModal: FC<DeleteCVModalProps> = ({setIsOpen}) => {
  const onClose = () => setIsOpen((prev: boolean) => !prev);

  const cancelRef = useRef(null);
  return (
    <Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={true}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete CV</AlertDialog.Header>
          <AlertDialog.Body>
            This will remove all data relating to This CV. This action cannot be
            reversed. Deleted data can not be recovered.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
};

export default DeleteCVModal;
