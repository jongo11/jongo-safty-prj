const _mx = {
  svgMask: (svg, color) => {
    return (
      `mask-image: ${svg};
      -webkit-mask-image: ${svg};
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-size: contain;
      -webkit-mask-size: contain;
      mask-position: center;
      -webkit-mask-position: center;
      background: ${color};`
    )
  },
  blind: 'position: absolute; width: 1px; height: 1px; margin: -1px; overflow: hidden; clip-path: polygon(0 0, 0 0, 0 0);',
  ell: (num) => {
    return (
      `overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${num};
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      word-break: break-all;`
    )
  }
}

export default _mx;