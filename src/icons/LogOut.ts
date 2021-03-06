import styled from 'styled-components'

export default styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 6px;
  height: 16px;
  border: 2px solid;
  transform: scale(var(--ggs, 1));
  border-right: 0;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  margin-left: -10px;

  &::before,
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border-radius: 3px;
    width: 10px;
    height: 2px;
    background: currentColor;
    left: 5px;
    bottom: 5px;
  }
  &::after {
    border-top: 2px solid;
    border-left: 2px solid;
    transform: rotate(-45deg);
    width: 8px;
    height: 8px;
    left: 4px;
    bottom: 2px;
  }
`
