/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as ArrowIcon } from '@zendeskgarden/svg-icons/src/16/arrow-left-stroke.svg';
import { arrowStyles, getColorV8, menuStyles } from '@zendeskgarden/react-theming';

type ARROW_POSITION =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'right'
  | 'right-top'
  | 'right-bottom'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'left-top'
  | 'left-bottom';

type MENU_POSITION = 'top' | 'right' | 'bottom' | 'left';

const StyledMenu = styled.div<{
  arrowPosition: ARROW_POSITION;
}>`
  width: 100px;
  height: 100px;

  ${p =>
    arrowStyles(p.arrowPosition, {
      animationModifier: '[data-garden-animate-arrow="true"]'
    })}

  & > div {
    background-clip: content-box;
    background-color: ${p => getColorV8('neutralHue', 100, p.theme)};
    padding: ${p => p.theme.space.xs};
    height: 100%;
  }
`;

const StyledMenuWrapper = styled.div<{
  menuPosition: MENU_POSITION;
  isHidden?: boolean;
}>`
  ${p =>
    menuStyles(p.menuPosition, {
      zIndex: 1,
      theme: p.theme,
      hidden: p.isHidden,
      margin: p.theme.space.xs,
      animationModifier: '[data-garden-animate-menu="true"]'
    })};
`;

const StyledRow = styled(Row)`
  & + & {
    margin-top: ${p => p.theme.space.xs};
  }
`;

const ButtonMenu = ({
  isHidden,
  onClick,
  position
}: {
  isHidden: boolean;
  onClick: any;
  position: ARROW_POSITION;
}) => {
  const positions: Record<
    ARROW_POSITION,
    { iconStyle?: any; menuStyle: any; arrowPosition: ARROW_POSITION }
  > = {
    top: {
      iconStyle: { transform: 'rotate(90deg)' },
      menuStyle: { bottom: '100%', left: -34 },
      arrowPosition: 'bottom'
    },
    'top-left': {
      iconStyle: { transform: 'rotate(60deg)' },
      menuStyle: { bottom: '100%', right: 4 },
      arrowPosition: 'bottom-right'
    },
    'top-right': {
      iconStyle: { transform: 'rotate(120deg)' },
      menuStyle: { bottom: '100%', left: 4 },
      arrowPosition: 'bottom-left'
    },
    right: {
      iconStyle: { transform: 'rotate(180deg)' },
      menuStyle: { top: -34, left: '100%' },
      arrowPosition: 'left'
    },
    'right-top': {
      iconStyle: { transform: 'rotate(150deg)' },
      menuStyle: { bottom: 4, left: '100%' },
      arrowPosition: 'left-bottom'
    },
    'right-bottom': {
      iconStyle: { transform: 'rotate(-150deg)' },
      menuStyle: { top: 4, left: '100%' },
      arrowPosition: 'left-top'
    },
    bottom: {
      iconStyle: { transform: 'rotate(-90deg)' },
      menuStyle: { top: '100%', left: -34 },
      arrowPosition: 'top'
    },
    'bottom-left': {
      iconStyle: { transform: 'rotate(-60deg)' },
      menuStyle: { top: '100%', right: 4 },
      arrowPosition: 'top-right'
    },
    'bottom-right': {
      iconStyle: { transform: 'rotate(-120deg)' },
      menuStyle: { top: '100%', left: 4 },
      arrowPosition: 'top-left'
    },
    left: {
      menuStyle: { top: -34, right: '100%' },
      arrowPosition: 'right'
    },
    'left-top': {
      iconStyle: { transform: 'rotate(30deg)' },
      menuStyle: { bottom: 4, right: '100%' },
      arrowPosition: 'right-bottom'
    },
    'left-bottom': {
      iconStyle: { transform: 'rotate(-30deg)' },
      menuStyle: { top: 4, right: '100%' },
      arrowPosition: 'right-top'
    }
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <IconButton aria-label={position} size="small" onClick={onClick}>
        <ArrowIcon style={positions[position].iconStyle} />
      </IconButton>
      <StyledMenuWrapper
        menuPosition={position.split('-')[0] as MENU_POSITION}
        isHidden={isHidden}
        data-garden-animate-menu={!isHidden}
        style={positions[position].menuStyle}
      >
        <StyledMenu
          arrowPosition={positions[position].arrowPosition}
          data-garden-animate-arrow={!isHidden}
        >
          <div />
        </StyledMenu>
      </StyledMenuWrapper>
    </div>
  );
};

const Example = () => {
  const initialHidden: Record<ARROW_POSITION, boolean> = {
    top: true,
    'top-left': true,
    'top-right': true,
    right: true,
    'right-top': true,
    'right-bottom': true,
    bottom: true,
    'bottom-left': true,
    'bottom-right': true,
    left: true,
    'left-top': true,
    'left-bottom': true
  };

  const [hidden, setHidden] = useState<Record<ARROW_POSITION, boolean>>(initialHidden);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const position = (e.currentTarget as HTMLButtonElement).getAttribute(
      'aria-label'
    ) as ARROW_POSITION;

    setHidden({ ...initialHidden, [position]: !hidden[position] });
  };

  return (
    <Row justifyContent="center" style={{ minWidth: 400 }}>
      <Col md={7}>
        <StyledRow>
          <Col textAlign="end">
            <ButtonMenu isHidden={hidden['top-left']} onClick={onClick} position="top-left" />
          </Col>
          <Col textAlign="center">
            <ButtonMenu isHidden={hidden.top} onClick={onClick} position="top" />
          </Col>
          <Col textAlign="start">
            <ButtonMenu isHidden={hidden['top-right']} onClick={onClick} position="top-right" />
          </Col>
        </StyledRow>
        <StyledRow>
          <Col textAlign="start">
            <ButtonMenu isHidden={hidden['left-top']} onClick={onClick} position="left-top" />
          </Col>
          <Col textAlign="end">
            <ButtonMenu isHidden={hidden['right-top']} onClick={onClick} position="right-top" />
          </Col>
        </StyledRow>
        <StyledRow>
          <Col textAlign="start">
            <ButtonMenu isHidden={hidden.left} onClick={onClick} position="left" />
          </Col>
          <Col textAlign="end">
            <ButtonMenu isHidden={hidden.right} onClick={onClick} position="right" />
          </Col>
        </StyledRow>
        <StyledRow>
          <Col textAlign="start">
            <ButtonMenu isHidden={hidden['left-bottom']} onClick={onClick} position="left-bottom" />
          </Col>
          <Col textAlign="end">
            <ButtonMenu
              isHidden={hidden['right-bottom']}
              onClick={onClick}
              position="right-bottom"
            />
          </Col>
        </StyledRow>
        <StyledRow>
          <Col textAlign="end">
            <ButtonMenu isHidden={hidden['bottom-left']} onClick={onClick} position="bottom-left" />
          </Col>
          <Col textAlign="center">
            <ButtonMenu isHidden={hidden.bottom} onClick={onClick} position="bottom" />
          </Col>
          <Col textAlign="start">
            <ButtonMenu
              isHidden={hidden['bottom-right']}
              onClick={onClick}
              position="bottom-right"
            />
          </Col>
        </StyledRow>
      </Col>
    </Row>
  );
};

export default Example;
