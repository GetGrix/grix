// Simple translation system for Grix
// Each language is a JSON object with key-value pairs
// Keys should use dot notation for organization (e.g., "toolbar.build")

export interface Translation {
  [key: string]: string;
}

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
}

// Available languages
export const languages: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', direction: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', direction: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', direction: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', direction: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', direction: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', direction: 'ltr' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', direction: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', direction: 'rtl' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', direction: 'ltr' },
];

// Translation keys with their English defaults
export const translationKeys = {
  // App name (usually not translated)
  'app.name': 'Grix',
  
  // Toolbar
  'toolbar.build': 'Build',
  'toolbar.examples': 'Examples',
  
  // Build tools
  'tools.line': 'Line Builder',
  'tools.line.description': 'Create and edit lines to explore slopes and fractions',
  'tools.rectangle': 'Rectangle Builder',
  'tools.rectangle.description': 'Create rectangles to explore area and multiplication',
  'tools.circle': 'Circle Builder',
  'tools.circle.description': 'Create circles to explore circumference and area',
  'tools.triangle': 'Triangle Builder',
  'tools.triangle.description': 'Create triangles to explore angles and trigonometry',
  'tools.function': 'Function Grapher',
  'tools.function.description': 'Create function graphs like parabolas, sine waves, and more',
  
  // Settings
  'settings.title': 'Visualization Settings',
  'settings.resetAll': 'Reset All',
  'settings.allSettings': 'All Settings',
  
  // Settings sections
  'settings.sections.originLines': 'Origin Lines',
  'settings.sections.originLines.subtitle': 'Enhancements for lines from (0,0)',
  'settings.sections.divisionFractions': 'Division & Fractions',
  'settings.sections.divisionFractions.subtitle': 'Visual fraction and division concepts',
  'settings.sections.gridReference': 'Grid & Reference',
  'settings.sections.gridReference.subtitle': 'Grid enhancements and reference lines',
  'settings.sections.circlesConcepts': 'Circle Concepts',
  'settings.sections.circlesConcepts.subtitle': 'Visual features for circles and curves',
  'settings.sections.functionConcepts': 'Function Concepts',
  'settings.sections.functionConcepts.subtitle': 'Mathematical function visualization features',
  'settings.sections.triangleConcepts': 'Triangle Concepts',
  'settings.sections.triangleConcepts.subtitle': 'Trigonometry and geometry learning features',
  'settings.sections.rectangleConcepts': 'Rectangle Concepts',
  'settings.sections.rectangleConcepts.subtitle': 'Educational features for rectangles and areas',
  'settings.sections.display': 'Display',
  'settings.sections.display.subtitle': 'Adjust visibility for classrooms and large screens',
  
  // Context menu
  'context.details': 'Details',
  'context.delete': 'Delete',
  'context.close': 'Close',
  'context.expand': 'Expand',
  'context.collapse': 'Collapse',
  
  // Object types
  'objects.line': 'Line',
  'objects.rectangle': 'Rectangle',
  'objects.circle': 'Circle',
  'objects.triangle': 'Triangle',
  'objects.function': 'Function',
  
  // Mathematical labels
  'math.slope': 'slope',
  'math.area': 'area',
  'math.radius': 'radius',
  'math.diameter': 'diameter',
  'math.circumference': 'circumference',
  'math.perimeter': 'perimeter',
  'math.angle': 'angle',
  'math.degrees': 'degrees',
  
  // Action menu
  'actions.title': 'Actions & Tools',
  'actions.clearBoard': 'Clear Board',
  'actions.clearBoard.description': 'Remove all shapes and reset settings',
  'actions.exportSession': 'Export Session',
  'actions.exportSession.description': 'Save your work as a file',
  'actions.importSession': 'Import Session',
  'actions.importSession.description': 'Load saved work from file',
  'actions.exportImage': 'Export Image',
  'actions.exportImage.description': 'Save as PNG (coming soon)',
  
  // Confirmation dialogs
  'confirm.clearEverything': 'Clear Everything?',
  'confirm.clearEverything.message': 'This will remove all shapes, reset settings, and clear your saved work. This action cannot be undone.',
  'confirm.cancel': 'Cancel',
  'confirm.clearAll': 'Clear All',
  
  // Tutorial
  'tutorial.welcome.title': 'Welcome to Grix! 🎯',
  'tutorial.welcome.content': 'Grix is a mathematical visualization platform where you can explore concepts like slopes, fractions, multiplication, and more through interactive graphics.',
  'tutorial.examples.title': 'Explore Examples 📚',
  'tutorial.examples.content': "Click the 'Examples' button in the toolbar to load pre-made mathematical demonstrations. Perfect for getting started!",
  'tutorial.settings.title': 'Customize Visualizations ⚙️',
  'tutorial.settings.content': "Use the 'Settings' button in the bottom-left to enable different mathematical features like equivalent fractions, area calculations, and more.",
  'tutorial.tools.title': 'Interactive Tools 🛠️',
  'tutorial.tools.content': 'Use the toolbar to draw lines and rectangles. Zoom with Ctrl+scroll wheel, and pan by scrolling. On mobile, use pinch gestures.',
  'tutorial.skip': 'Skip Tutorial',
  'tutorial.next': 'Next',
  'tutorial.tryExample': 'Try an Example!',
  'tutorial.loading': 'Loading...',
  'tutorial.step': 'Step',
  'tutorial.of': 'of',
  
  // Info modal
  'info.about': 'About Grix',
  'info.subtitle': 'Mathematical Visualization Playground',
  'info.description': 'Grix is a playground-first mathematical grid system that scales from 3rd-grade fractions to professional linear algebra. Explore slopes, areas, trigonometry, functions, and more through interactive visual learning.',
  'info.keyFeatures': 'Key Features',
  'info.features.interactive': 'Interactive mathematical shapes and functions',
  'info.features.realtime': 'Real-time visualization of mathematical concepts',
  'info.features.educational': 'Educational features for fractions, geometry, and algebra',
  'info.features.touch': 'Touch-friendly interface for tablets and mobile devices',
  'info.features.progressive': 'Progressive complexity from elementary to advanced math',
  'info.opensource': 'Free & Open Source',
  'info.opensource.description': 'Grix is completely free to use and open source under the MIT License. Anyone can contribute, modify, or use it for any purpose including commercial.',
  'info.viewGithub': 'View on GitHub',
  'info.contact': 'Get in Touch',
  'info.contact.description': "Have questions, suggestions, or want to contribute? We'd love to hear from you!",
  'info.madeWith': 'Made with ❤️ for mathematical learning',
  
  // Zoom controls
  'zoom.zoomIn': 'Zoom in (Ctrl+scroll up)',
  'zoom.zoomOut': 'Zoom out (Ctrl+scroll down)',
  'zoom.centerView': 'Center view (single click) or Reset zoom (double click)',
  'zoom.tip': 'Tip:',
  'zoom.tipMessage': 'Double-tap this button to reset zoom level too!',
  
  // Errors
  'error.loadExample': 'Failed to load example',
  'error.importFile': 'Failed to import state. Please check the file format.',
  'error.readFile': 'Failed to read file. Please select a valid Grix export file.',
  
  // Debug info
  'debug.input': 'Input',
  'debug.zoom': 'Zoom',
  'debug.center': 'Center',
  'debug.tool': 'Tool',
  'debug.selected': 'Selected',
  'debug.panMode': 'Pan Mode',
  'debug.object': 'object',
  'debug.objects': 'objects',
  
  // Settings - Crosshairs
  'settings.coordinateCrosshairs': 'Coordinate Crosshairs',
  'settings.coordinateCrosshairs.description': 'Show coordinate crosshairs when hovering in pan mode',
  
  // Context menu
  'context.rayDetails': 'Line Details',
  'context.rectangleDetails': 'Rectangle Details', 
  'context.circleDetails': 'Circle Details',
  'context.triangleDetails': 'Triangle Details',
  'context.functionDetails': 'Function Details',
  'context.start': 'Start',
  'context.end': 'End',
  'context.position': 'Position',
  'context.size': 'Size',
  'context.center': 'Center',
  'context.radius': 'Radius',
  'context.diameter': 'Diameter',
  'context.circumference': 'Circumference',
  'context.area': 'Area',
  'context.type': 'Type',
  'context.vertices': 'Vertices',
  'context.sides': 'Sides',
  'context.angles': 'Angles',
  'context.perimeter': 'Perimeter',
  'context.equation': 'Equation',
  'context.domain': 'Domain',
  'context.points': 'Points',
  'context.editEquation': 'Edit Equation',
  'context.fraction': 'Fraction',
  'context.slope': 'Slope',
  
  // Common
  'common.loading': 'Loading...',
  'common.shapes': 'shapes',
  'common.shape': 'shape',
  'common.onCanvas': 'on canvas',
  'common.dismiss': 'Dismiss permanently',
  
  // Special/fallback
  'translation.missing': 'Translation needed',
} as const;

// Type for translation keys
export type TranslationKey = keyof typeof translationKeys;

// Default language
export const defaultLanguage = 'en';