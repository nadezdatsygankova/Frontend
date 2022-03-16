


import React, { useState } from 'react'
import useCollapse from 'react-collapsed'

export default function Collapsible() {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    return (
        <div>
            <button
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {isExpanded ? 'Collapse' : 'Expand'}
            </button>
            <section {...getCollapseProps()}>Collapsed content 🙈</section>
        </div>
    )
}