/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { Dots } from '@zendeskgarden/react-loaders';

const SavePatternInteraction = () => {
  const themeContext = useContext(ThemeContext);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    if (!isLoading && buttonElement) {
      buttonElement.style.width = `${buttonElement.clientWidth}px`;
    }

    const timeout = setTimeout(() => {
      setIsLoading(!isLoading);
    }, 2000);

    return () => {
      clearTimeout(timeout);

      if (isLoading && buttonElement) {
        buttonElement.style.width = '';
      }
    };
  }, [isLoading]);

  return (
    <Row>
      <Col textAlign="center">
        <Button isPrimary ref={buttonRef}>
          {isLoading ? (
            <Dots delayMS={0} aria-label="Save" size={themeContext.space.base * 5} />
          ) : (
            'Save'
          )}
        </Button>
      </Col>
    </Row>
  );
};

export default SavePatternInteraction;
