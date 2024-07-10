import React from 'react';
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  useDisclosure
} from '@nextui-org/react';
export default function AddBuinessPopup({
  firstOpen,
  onFirstChange
}: {
  firstOpen: boolean;
  onFirstChange: (open: boolean) => void;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure({
    defaultOpen: false
  });
  return (
    <>
      <Modal
        isOpen={firstOpen}
        shouldBlockScroll={false}
        onOpenChange={onFirstChange}
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <ModalHeader className="flex-col items-center gap-1 px-0 text-center">
                <h1 className="text-2xl">Running another business?</h1>
                <p className="text-small font-normal text-default-500">
                  Our plans are designed to help you grow all your businesses
                  without limits.
                </p>
              </ModalHeader>
              <ModalBody className="flex w-full flex-col gap-2">
                <Divider className="mb-2" />
                <div className="flex w-full items-center justify-end">
                  <div className="flex gap-2">
                    <Button
                      color="danger"
                      type="button"
                      variant="flat"
                      onPress={onClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-orange-500 text-white"
                      fullWidth
                      onPress={() => {
                        onOpen();
                        onClose();
                      }}
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={isOpen}
        shouldBlockScroll={false}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody>
              <ModalHeader className="flex-col items-center gap-1 px-0 text-center">
                <h1 className="text-2xl">Create your new business</h1>
              </ModalHeader>
              <form
                className="flex w-full flex-col gap-2"
                onSubmit={(e: any) => {
                  e.preventDefault();
                  onClose();
                  console.log(e.target[0].value);
                  console.log(e.target[1].value);
                }}
              >
                <label
                  htmlFor="businessName"
                  className="text-default-500 dark:text-default-300"
                >
                  Business Name
                </label>
                <Textarea
                  aria-label="Business Name"
                  minRows={1}
                  name="businessName"
                  placeholder="Enter a business name"
                  variant="faded"
                />
                <label
                  htmlFor="country"
                  className="text-default-500 dark:text-default-300"
                >
                  Country
                </label>
                <Textarea
                  aria-label="Country"
                  minRows={1}
                  name="country"
                  placeholder="Enter a country"
                  variant="faded"
                  className="text-[20px]"
                />
                <Divider className="my-2" />
                <div className="flex w-full items-center justify-end pb-4">
                  <div className="flex gap-2">
                    <Button
                      color="danger"
                      type="button"
                      variant="flat"
                      onPress={onClose}
                    >
                      Cancel
                    </Button>
                    <Button className="bg-orange-500 text-white" type="submit">
                      Save
                    </Button>
                  </div>
                </div>
              </form>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
