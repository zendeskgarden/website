/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { cloneElement, ReactNode } from 'react';
import styled from 'styled-components';
import { MD } from '@zendeskgarden/react-typography';
import { Well } from '@zendeskgarden/react-notifications';
import { ReactComponent as XStrokeIcon } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { ReactComponent as CheckLgStrokeIcon } from '@zendeskgarden/svg-icons/src/16/check-lg-stroke.svg';
import { ReactComponent as AlertErrorStrokeIcon } from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';

import { getColor } from '@zendeskgarden/react-theming';

export interface IStyledBestPracticeTextProps {
  hue: string;
}

export interface IFileNode {
  name: string;
  publicURL: string;
}

export interface IFileEdge {
  node: IFileNode;
}

export interface IStyledWell {
  hue: string;
}

const StyledIcon = styled(({ children, ...props }) =>
  cloneElement(React.Children.only(children), props)
)`
  margin-right: ${props => props.theme.space.xs};
  color: ${props => getColor(props.hue, 500, props.theme)};
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.space.xs};
`;

export const BestPractice = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: ${p => p.theme.breakpoints.md}) {
    justify-content: space-between;
  }

  @media (max-width: ${p => p.theme.breakpoints.sm}) {
    display: block;
  }
`;

const StyledBestPracticeContainer = styled.div`
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: ${props => props.theme.space.xxl};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    margin: ${props => props.theme.space.md} ${props => props.theme.space.xs};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const StyledWell = styled(Well)<IStyledWell>`
  border: none;
  border-top: ${props => props.theme.borders.md};
  border-radius: 0;
  border-color: ${props => getColor(props.hue, 500, props.theme)};
  background: ${props => getColor('neutralHue', 100, props.theme)};
  padding: ${props => `${props.theme.space.md}`};

  ul {
    margin: 0;
    list-style: none;
  }

  li {
    padding: ${props => props.theme.space.base}px 0;
  }

  li:not(:last-child) {
    border-bottom: ${props =>
      `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}`};
  }
`;

const StyledBestPracticeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  border: ${props => `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}`};
  border-bottom: none;
  border-top-left-radius: ${props => props.theme.borderRadii.md};
  border-top-right-radius: ${props => props.theme.borderRadii.md};

  & img {
    border-top-left-radius: ${props => props.theme.borderRadii.md};
    border-top-right-radius: ${props => props.theme.borderRadii.md};
  }
`;

export interface ISectionProps {
  hue: string;
  title?: string;
  altText?: string;
  imageSource?: string;
  icon?: ReactNode;
}

const Section: React.FC<ISectionProps> = props => (
  <StyledBestPracticeContainer>
    <StyledBestPracticeImageContainer>
      {props.imageSource && <img src={props.imageSource} alt={props.altText} />}
    </StyledBestPracticeImageContainer>
    <StyledWell hue={props.hue}>
      <StyledTitle>
        <StyledIcon hue={props.hue}>{props.icon}</StyledIcon>
        <MD isBold>{props.title}</MD>
      </StyledTitle>
      {props.children}
    </StyledWell>
  </StyledBestPracticeContainer>
);

export const Dont: React.FC = props => (
  <Section title="Not this" altText="not this" hue="dangerHue" icon={<XStrokeIcon />} {...props} />
);

export const Do: React.FC = props => (
  <Section
    title="Do this"
    altText="do this"
    hue="successHue"
    icon={<CheckLgStrokeIcon />}
    {...props}
  />
);

export const Caution: React.FC = props => (
  <Section
    title="Caution"
    altText="caution"
    hue="warningHue"
    icon={<AlertErrorStrokeIcon />}
    {...props}
  />
);
