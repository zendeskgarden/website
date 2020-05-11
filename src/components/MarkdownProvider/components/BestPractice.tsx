/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { MD } from '@zendeskgarden/react-typography';
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

const StyledBestPracticeText = styled.div<IStyledBestPracticeTextProps>`
  border-top: ${props => `${props.theme.borders.md} ${getColor(props.hue, 500, props.theme)}`};
  border-bottom-left-radius: ${props => props.theme.borderRadii.md};
  border-bottom-right-radius: ${props => props.theme.borderRadii.md};
  background: ${props => getColor('neutralHue', 100, props.theme)};
  padding: ${props => `${props.theme.space.base * 5}px ${props.theme.space.base * 6}px`};

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

const StyledIcon = styled(({ children, ...props }) =>
  React.cloneElement(React.Children.only(children), props)
)`
  margin-right: ${props => props.theme.space.base * 2}px;
  color: ${props => getColor(props.hue, 500, props.theme)};
`;

const StyledHeaderIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.space.base * 2}px;
`;

const StyledBestPractice = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: ${p => p.theme.breakpoints.md}) {
    justify-content: space-between;
  }

  @media (max-width: ${p => p.theme.breakpoints.sm}) {
    display: block;
  }
`;

export const BestPractice = (props: HTMLAttributes<HTMLDivElement>) => {
  return <StyledBestPractice {...props} />;
};

const StyledBestPracticeContainer = styled.div`
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: ${props => props.theme.space.base * 12}px;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    margin: ${props => props.theme.space.base * 4}px ${props => props.theme.space.base * 2}px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: ${p => p.theme.breakpoints.sm}) {
    margin-bottom: ${props => props.theme.space.base * 4}px;
  }
`;

export const BestPracticeSection: React.FC<{
  type: 'do' | 'dont' | 'caution';
  imageSource?: string;
}> = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/components-avatar/" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  const edges: IFileEdge[] = data.allFile.edges;

  const IMAGES: Record<string, string> = edges
    .map(edge => edge.node)
    .reduce((images, node) => ({ ...images, [node.name]: node.publicURL }), {});

  let Icon;
  let hue;
  let title;
  let altText;

  if (props.type === 'do') {
    Icon = CheckLgStrokeIcon;
    hue = 'successHue';
    title = 'Do this';
    altText = 'best practices';
  } else if (props.type === 'dont') {
    Icon = XStrokeIcon;
    hue = 'dangerHue';
    title = 'Not this';
    altText = 'not best practices';
  } else {
    Icon = AlertErrorStrokeIcon;
    hue = 'warningHue';
    title = 'Caution';
    altText = 'caution practices';
  }

  return (
    <StyledBestPracticeContainer>
      {props.imageSource && <img src={IMAGES[props.imageSource]} alt={altText} />}
      <StyledBestPracticeText hue={hue}>
        <StyledHeaderIcon>
          <StyledIcon hue={hue}>
            <Icon />
          </StyledIcon>
          <MD tag="h4" isBold>
            {title}
          </MD>
        </StyledHeaderIcon>
        {props.children}
      </StyledBestPracticeText>
    </StyledBestPracticeContainer>
  );
};
