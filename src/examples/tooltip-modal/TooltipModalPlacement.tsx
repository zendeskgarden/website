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
import { getColor } from '@zendeskgarden/react-theming';
import { Button } from '@zendeskgarden/react-buttons';

const StyledWrapperRow = styled(Row)`
  padding: ${p => p.theme.space.sm};
  direction: ltr;
  overflow: auto;
`;

const StyledWrapperCol = styled(Col)`
  min-width: 400px;
`;

const StyledSpacedRow = styled.div`
  & > * {
    margin: 0 ${p => p.theme.space.xs};
  }
`;

const StyledCenterRow = styled.div`
  display: flex;
  justify-content: center;
  margin: ${p => p.theme.space.xs} 0;
`;

const StyledCenterColumn = styled.div`
  min-width: 150px;
`;

const StyledProgress = styled(TooltipModal.FooterItem)`
  flex-grow: 1;
  color: ${p => getColor('neutralHue', 600, p.theme)};
  font-size: ${p => p.theme.fontSizes.sm};
`;

const Example = () => {
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
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
    <StyledWrapperRow>
      <StyledWrapperCol textAlign="center">
        <StyledSpacedRow>
          <Button size="small" ref={storeRef} onClick={onClick}>
            top-start
          </Button>
          <Button size="small" ref={storeRef} onClick={onClick}>
            top
          </Button>
          <Button size="small" ref={storeRef} onClick={onClick}>
            top-end
          </Button>
        </StyledSpacedRow>
        <StyledCenterRow>
          <Button size="small" ref={storeRef} onClick={onClick}>
            start-top
          </Button>
          <StyledCenterColumn></StyledCenterColumn>
          <Button size="small" ref={storeRef} onClick={onClick}>
            end-top
          </Button>
        </StyledCenterRow>
        <StyledCenterRow>
          <Button size="small" ref={storeRef} onClick={onClick}>
            start
          </Button>
          <StyledCenterColumn>
            <Button size="small" ref={storeRef} onClick={onClick}>
              auto
            </Button>
          </StyledCenterColumn>
          <Button size="small" ref={storeRef} onClick={onClick}>
            end
          </Button>
        </StyledCenterRow>
        <StyledCenterRow>
          <Button size="small" ref={storeRef} onClick={onClick}>
            start-bottom
          </Button>
          <StyledCenterColumn></StyledCenterColumn>
          <Button size="small" ref={storeRef} onClick={onClick}>
            end-bottom
          </Button>
        </StyledCenterRow>
        <StyledSpacedRow>
          <Button size="small" ref={storeRef} onClick={onClick}>
            bottom-start
          </Button>
          <Button size="small" ref={storeRef} onClick={onClick}>
            bottom
          </Button>
          <Button size="small" ref={storeRef} onClick={onClick}>
            bottom-end
          </Button>
        </StyledSpacedRow>
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
            sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
            earthnut pea peanut soko zucchini.
          </TooltipModal.Body>
          <TooltipModal.Footer>
            <StyledProgress>
              <span>{currentStep} of 13</span>
            </StyledProgress>
            <TooltipModal.FooterItem>
              {currentStep > 1 && (
                <Button
                  size="small"
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
      </StyledWrapperCol>
    </StyledWrapperRow>
  );
};

export default Example;
