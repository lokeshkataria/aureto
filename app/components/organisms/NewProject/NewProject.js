// @flow
/**
 * NewProject
 */
import React, { useRef, useState } from 'react';
import type { Node } from 'react';
import { withTheme } from '@material-ui/core/styles';
import { Paper, Typography, Button, TextField } from '@material-ui/core';
import type { Props } from './types';
import styles from './NewProject.style';
import withStyles from '../../../lib/withStyles';
import FormWrapper from '../../atoms/FormWrapper';

const NewProject = ({ className }: Props): Node => {
  const textInput = useRef(null);
  const [inputValue, setInputValue] = useState(1);
  const handleSubmit = () => {
    const { value } = textInput.current;
    setInputValue(value);
  };
  return (
    <FormWrapper>
      <Paper className={className}>
        <Typography component="h1" variant="h4" align="center">
          Project Details
        </Typography>
        <form>
          <TextField
            required
            error={!inputValue}
            id="projectName"
            name="projectName"
            label="Project Name"
            fullWidth
            autoComplete="lname"
            className="new-project-field"
            inputRef={textInput}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
            className="submit-button"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </FormWrapper>
  );
};

NewProject.defaultProps = {};
export default withTheme(withStyles(NewProject, styles));
export { NewProject };
