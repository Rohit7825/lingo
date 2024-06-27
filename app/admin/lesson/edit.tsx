import {
  Create,
  Datagrid,
  List,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextField,
  TextInput,
  required,
  Edit,
} from "react-admin";

export const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />

        <ReferenceInput source="unitId" reference="units" />
        <NumberInput source="order" validate={[required()]} label="Order" />
      </SimpleForm>
    </Edit>
  );
};
