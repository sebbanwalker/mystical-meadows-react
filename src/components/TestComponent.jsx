import React from 'react';
import { motion } from 'framer-motion';

function TestComponent() {
    return (
        <motion.div
            initial={{ color: "#fff" }}
            whileHover={{ color: "#0000ff" }}
            style={{ fontSize: "24px", cursor: "pointer", padding: "100px" }}
        >
            Test Animation
        </motion.div>
    );
}

export default TestComponent;
