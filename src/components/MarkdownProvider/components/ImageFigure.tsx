/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { getColor } from '@zendeskgarden/react-theming';

const StyledCaption = styled.figcaption`
  margin-bottom: ${props => props.theme.space.md};
  text-align: center;
  color: ${props => getColor({ theme: props.theme, variable: 'foreground.subtle' })};
`;

interface IImageFigure {
  caption: string;
  imageAlt: string;
  imageSource: IGatsbyImageData;
}

export const ImageFigure: React.FC<IImageFigure> = props => {
  const theme = useContext(ThemeContext);

  return (
    <figure>
      <GatsbyImage
        alt={props.imageAlt}
        image={props.imageSource}
        style={{
          border: `${theme.borders.sm} ${getColor({ theme, variable: 'border.default' })}`,
          marginBottom: theme.space.xs,
          borderRadius: theme.borderRadii.md
        }}
      />
      <StyledCaption>{props.caption}</StyledCaption>
    </figure>
  );
};

export const ImageFigCaption = StyledCaption;
