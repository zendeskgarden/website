/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { TooltipModal } from '@zendeskgarden/react-modals';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { Span, SM } from '@zendeskgarden/react-typography';

const StyledRow = styled(Row)`
  & + & {
    margin-top: ${p => p.theme.space.xs};
  }
`;

const Example = () => {
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({
    'top-start': null,
    top: null,
    'top-end': null,
    'end-top': null,
    end: null,
    'end-bottom': null,
    'bottom-end': null,
    bottom: null,
    'bottom-start': null,
    'start-bottom': null,
    start: null,
    'start-top': null,
    auto: null
  });
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
  const [placement, setPlacement] = useState<string>();

  const storeRef = useCallback((ref: HTMLButtonElement | null) => {
    if (ref) {
      buttonRefs.current[ref.textContent!] = ref;
    }
  }, []);

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const placementName = (e.target as HTMLButtonElement).textContent;

    if (placementName) {
      setPlacement(placementName);
      setReferenceElement(buttonRefs.current[placementName]);
    }
  }, []);

  const currentStep = useMemo(() => {
    if (!placement) {
      return 0;
    }

    return Object.keys(buttonRefs.current).indexOf(placement) + 1;
  }, [placement]);

  return (
    <>
      <TooltipModal
        referenceElement={referenceElement}
        onClose={() => setReferenceElement(null)}
        placement={placement as any}
        popperModifiers={[
          {
            name: 'flip',
            options: {
              boundary: 'viewport'
            }
          },
          {
            name: 'preventOverflow',
            options: {
              boundary: 'viewport'
            }
          }
        ]}
      >
        <TooltipModal.Title>Tooltip modal header</TooltipModal.Title>
        <TooltipModal.Body>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea
          sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut
          pea peanut soko zucchini.
        </TooltipModal.Body>
        <TooltipModal.Footer>
          <SM style={{ flexGrow: 1 }}>
            <Span hue="grey">{currentStep} of 13</Span>
          </SM>
          <TooltipModal.FooterItem>
            {currentStep > 1 && (
              <Button
                size="small"
                isBasic
                onClick={() => {
                  const placements = Object.keys(buttonRefs.current);
                  const currentPlacementIndex = placements.indexOf(placement!);
                  const previousPlacement = placements[currentPlacementIndex - 1];

                  setPlacement(previousPlacement);
                  setReferenceElement(buttonRefs.current[previousPlacement]);
                }}
              >
                Previous
              </Button>
            )}
          </TooltipModal.FooterItem>
          <TooltipModal.FooterItem>
            <Button
              size="small"
              isPrimary
              onClick={() => {
                if (currentStep === 13) {
                  setPlacement(undefined);
                  setReferenceElement(null);
                } else {
                  const placements = Object.keys(buttonRefs.current);
                  const currentPlacementIndex = placements.indexOf(placement!);
                  const nextPlacement = placements[currentPlacementIndex + 1];

                  setPlacement(nextPlacement);
                  setReferenceElement(buttonRefs.current[nextPlacement]);
                }
              }}
            >
              {currentStep === 13 ? 'Finish' : 'Next'}
            </Button>
          </TooltipModal.FooterItem>
        </TooltipModal.Footer>
        <TooltipModal.Close aria-label="Close" />
      </TooltipModal>
      <Row justifyContent="center" style={{ minWidth: 400 }}>
        <Col md={7}>
          <StyledRow>
            <Col textAlign="end">
              <Button size="small" ref={storeRef} onClick={onClick}>
                top-start
              </Button>
            </Col>
            <Col textAlign="center">
              <Button size="small" ref={storeRef} onClick={onClick}>
                top
              </Button>
            </Col>
            <Col textAlign="start">
              <Button size="small" ref={storeRef} onClick={onClick}>
                top-end
              </Button>
            </Col>
          </StyledRow>
          <StyledRow>
            <Col textAlign="start">
              <Button size="small" ref={storeRef} onClick={onClick}>
                start-top
              </Button>
            </Col>
            <Col textAlign="end">
              <Button size="small" ref={storeRef} onClick={onClick}>
                end-top
              </Button>
            </Col>
          </StyledRow>
          <StyledRow>
            <Col textAlign="start">
              <Button size="small" ref={storeRef} onClick={onClick}>
                start
              </Button>
            </Col>
            <Col textAlign="center">
              <Button size="small" ref={storeRef} onClick={onClick}>
                auto
              </Button>
            </Col>
            <Col textAlign="end">
              <Button size="small" ref={storeRef} onClick={onClick}>
                end
              </Button>
            </Col>
          </StyledRow>
          <StyledRow>
            <Col textAlign="start">
              <Button size="small" ref={storeRef} onClick={onClick}>
                start-bottom
              </Button>
            </Col>
            <Col textAlign="end">
              <Button size="small" ref={storeRef} onClick={onClick}>
                end-bottom
              </Button>
            </Col>
          </StyledRow>
          <StyledRow>
            <Col textAlign="end">
              <Button size="small" ref={storeRef} onClick={onClick}>
                bottom-start
              </Button>
            </Col>
            <Col textAlign="center">
              <Button size="small" ref={storeRef} onClick={onClick}>
                bottom
              </Button>
            </Col>
            <Col textAlign="start">
              <Button size="small" ref={storeRef} onClick={onClick}>
                bottom-end
              </Button>
            </Col>
          </StyledRow>
        </Col>
      </Row>
    </>
  );
};

export default Example;
