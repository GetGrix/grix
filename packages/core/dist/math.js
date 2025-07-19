// Core mathematical utilities for Grix
export const MathUtils = {
    // Vector operations
    distance(p1, p2) {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    },
    slope(p1, p2) {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        if (Math.abs(dx) < Number.EPSILON) {
            return dx === 0 ? Infinity : (dx > 0 ? Infinity : -Infinity);
        }
        return dy / dx;
    },
    angle(p1, p2) {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        return Math.atan2(dy, dx);
    },
    magnitude(vector) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    },
    normalize(vector) {
        const mag = this.magnitude(vector);
        if (mag === 0)
            return { x: 0, y: 0 };
        return { x: vector.x / mag, y: vector.y / mag };
    },
    // Grid operations
    snapToGrid(point, gridSize) {
        return {
            x: Math.round(point.x / gridSize) * gridSize,
            y: Math.round(point.y / gridSize) * gridSize
        };
    },
    // Rectangle operations
    calculateArea(rect) {
        return Math.abs(rect.properties.width * rect.properties.height);
    },
    boundsContainPoint(bounds, point) {
        return point.x >= bounds.x &&
            point.x <= bounds.x + bounds.width &&
            point.y >= bounds.y &&
            point.y <= bounds.y + bounds.height;
    },
    boundsIntersect(a, b) {
        return !(a.x + a.width < b.x ||
            b.x + b.width < a.x ||
            a.y + a.height < b.y ||
            b.y + b.height < a.y);
    },
    // Fraction utilities for educational features
    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    },
    simplifyFraction(numerator, denominator) {
        if (denominator === 0)
            return [numerator, 1];
        const divisor = this.gcd(numerator, denominator);
        return [numerator / divisor, denominator / divisor];
    },
    // Coordinate transformations
    worldToScreen(worldPoint, viewport, canvasSize) {
        const centerX = canvasSize.width / 2;
        const centerY = canvasSize.height / 2;
        const offsetX = (worldPoint.x - viewport.center.x) * viewport.zoom;
        const offsetY = (worldPoint.y - viewport.center.y) * viewport.zoom;
        return {
            x: centerX + offsetX,
            y: centerY - offsetY // Flip Y axis for mathematical coordinates
        };
    },
    screenToWorld(screenPoint, viewport, canvasSize) {
        const centerX = canvasSize.width / 2;
        const centerY = canvasSize.height / 2;
        const offsetX = (screenPoint.x - centerX) / viewport.zoom;
        const offsetY = (centerY - screenPoint.y) / viewport.zoom; // Flip Y axis
        return {
            x: viewport.center.x + offsetX,
            y: viewport.center.y + offsetY
        };
    }
};
// Input utilities for multi-device support
export const InputUtils = {
    // Detect device capabilities
    detectCapabilities() {
        const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const hasPencil = hasTouch && navigator.maxTouchPoints > 1;
        const hasKeyboard = true; // Assume all devices have virtual or physical keyboard
        const hasHover = window.matchMedia('(hover: hover)').matches;
        return {
            hasTouch,
            hasPencil,
            hasKeyboard,
            hasHover,
            maxTouchPoints: navigator.maxTouchPoints || 0,
            supportsPressure: 'force' in Touch.prototype,
            supportsTilt: 'altitudeAngle' in Touch.prototype
        };
    },
    // Normalize pointer events across input types
    normalizePointerEvent(event) {
        let inputType = 'mouse';
        if (event.pointerType === 'touch') {
            inputType = 'touch';
        }
        else if (event.pointerType === 'pen') {
            inputType = 'pen';
        }
        return {
            type: inputType,
            pressure: event.pressure || 0,
            tiltX: event.tiltX || 0,
            tiltY: event.tiltY || 0,
            x: event.clientX,
            y: event.clientY,
            timestamp: event.timeStamp,
            isPrimary: event.isPrimary,
            pointerId: event.pointerId
        };
    },
    // Calculate appropriate touch target size based on device
    getTouchTargetSize(inputType) {
        switch (inputType) {
            case 'pen':
                return 32; // Smaller for precise pencil input
            case 'touch':
                return 44; // Standard touch target size
            case 'mouse':
                return 24; // Smaller for precise mouse input
            default:
                return 44;
        }
    }
};
