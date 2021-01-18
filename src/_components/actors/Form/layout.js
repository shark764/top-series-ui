import React, { useState } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  Heading,
  Image,
  Layer,
  TextArea,
  TextInput,
} from 'grommet';
import { ChapterAdd, Close, UserSettings } from 'grommet-icons';

function Layout({ onSubmit, initialValues, onClose, handleRemove, isAddMode }) {
  const [value, setValue] = useState(initialValues);

  return (
    <Layer
      position="right"
      full="vertical"
      modal
      onClickOutside={onClose}
      onEsc={onClose}>
      <Box fill="vertical" overflow="auto" width="large" pad="large">
        <Box flex={false} direction="row" justify="between">
          <Heading level={2} margin="none">
            <ChapterAdd />{' '}
            {isAddMode ? 'New actor' : `Edit ${initialValues.name}`}
          </Heading>
          <Button icon={<Close />} onClick={onClose} />
        </Box>

        <Box flex="grow" overflow="auto" pad={{ vertical: 'medium' }}>
          <Form
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
            onReset={() => setValue(initialValues)}
            onSubmit={(event) => {
              onSubmit(event.value);
            }}>
            <Box flex="grow" overflow="auto" pad={{ vertical: 'medium' }}>
              <FormField name="name" label="Name">
                <TextInput
                  name="name"
                  placeholder="a great name here..."
                  icon={<UserSettings />}
                />
              </FormField>

              <FormField name="imageUrl" label="Image URL">
                <TextArea
                  name="imageUrl"
                  placeholder="https://images.com/image.jpg..."
                />
              </FormField>
              {value.imageUrl && (
                <Image fit="contain" fill="vertical" src={value.imageUrl} />
              )}
            </Box>

            <Box
              direction="row"
              justify="center"
              gap="medium"
              margin={{ top: 'medium' }}>
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Submit" primary />
              {!isAddMode && (
                <Button
                  type="button"
                  label="Remove"
                  secondary
                  onClick={() => handleRemove(initialValues.id)}
                />
              )}
            </Box>
          </Form>
        </Box>
      </Box>
    </Layer>
  );
}

export default Layout;
