/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useRef } from 'react';
import { TooltipModal } from '@zendeskgarden/react-modals';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const Example = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <Button
          ref={buttonRef}
          onClick={() => {
            setReferenceElement(buttonRef.current);
          }}
        >
          Tooltip modal
        </Button>
        <TooltipModal
          referenceElement={referenceElement}
          onClose={() => {
            setReferenceElement(null);
          }}
          placement="top"
        >
          <TooltipModal.Title tag="h2">Tooltip modal header</TooltipModal.Title>
          <TooltipModal.Body>
            Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea
            sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
            earthnut pea peanut soko zucchini.
          </TooltipModal.Body>
          <TooltipModal.Close aria-label="Close" />
        </TooltipModal>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
