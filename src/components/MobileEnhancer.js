import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

/**
 * MobileEnhancer component
 * 
 * This component applies mobile-specific enhancements without modifying the desktop experience.
 * It uses react-device-detect to only apply changes on mobile devices.
 */
const MobileEnhancer = () => {
  useEffect(() => {
    if (!isMobile) return; // Only apply enhancements on mobile devices
    
    // Apply mobile-specific touch event handling
    const enhanceMobileInteraction = () => {
      // Find all Text elements in the 3D scene (the navigation words)
      const textElements = document.querySelectorAll('text');
      
      textElements.forEach(textElement => {
        // Make text elements more touch-friendly
        const enhanceTouchArea = () => {
          // Create a larger invisible touch area around each text element
          const bbox = textElement.getBBox();
          const parentSVG = textElement.closest('svg');
          
          if (parentSVG) {
            // Check if this text element already has a touch enhancer
            const existingEnhancer = textElement.previousSibling?.classList?.contains('touch-enhancer');
            if (existingEnhancer) return;
            
            const touchArea = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            touchArea.setAttribute('x', bbox.x - 15); // Larger touch area
            touchArea.setAttribute('y', bbox.y - 15); // Larger touch area
            touchArea.setAttribute('width', bbox.width + 30); // Larger touch area
            touchArea.setAttribute('height', bbox.height + 30); // Larger touch area
            touchArea.setAttribute('fill', 'transparent');
            touchArea.setAttribute('class', 'touch-enhancer');
            
            // Insert before the text element so it's behind it
            textElement.parentNode.insertBefore(touchArea, textElement);
            
            // Forward touch events to the text element
            touchArea.addEventListener('touchstart', (e) => {
              e.stopPropagation();
              e.preventDefault(); // Prevent default touch behavior
              
              // Highlight the text briefly to provide visual feedback
              textElement.style.fill = '#64ffda';
              setTimeout(() => {
                textElement.style.fill = '';
              }, 300);
              
              const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
              });
              textElement.dispatchEvent(clickEvent);
            });
          }
        };
        
        // Apply enhancement after a short delay to ensure the 3D scene is fully rendered
        setTimeout(enhanceTouchArea, 1000);
      });
    };
    
    // Enhance the minimized 3D model to ensure it's interactive
    const enhanceMinimizedModel = () => {
      const sceneContainer = document.querySelector('.scene-container[data-is-minimized="true"]');
      if (sceneContainer) {
        // Ensure the minimized model is interactive
        sceneContainer.style.pointerEvents = 'auto';
        sceneContainer.style.zIndex = '9999';
        sceneContainer.style.cursor = 'pointer';
        
        // Add a subtle pulse animation to indicate interactivity
        sceneContainer.style.animation = 'pulse 2s infinite ease-in-out';
        
        // Make sure the container's click behavior is preserved
        // We'll remove any existing click listeners first to avoid duplicates
        const existingClickListener = sceneContainer._enhancedClickListener;
        if (existingClickListener) {
          sceneContainer.removeEventListener('click', existingClickListener);
        }
        
        // Add click and touch listeners that navigate to the home page
        const clickHandler = (e) => {
          // Handle clicks anywhere within the minimized 3D model
          e.stopPropagation();
          // Use history API instead of direct location change for better compatibility
          window.history.pushState({}, '', '/');
          // Dispatch a navigation event to ensure React Router updates
          window.dispatchEvent(new Event('popstate'));
        };
        
        const touchHandler = (e) => {
          // Handle touches anywhere within the minimized 3D model
          e.stopPropagation();
          e.preventDefault(); // Prevent default touch behavior
          // Use history API instead of direct location change for better compatibility
          window.history.pushState({}, '', '/');
          // Dispatch a navigation event to ensure React Router updates
          window.dispatchEvent(new Event('popstate'));
        };
        
        // Remove existing listeners if they exist
        const existingTouchListener = sceneContainer._enhancedTouchListener;
        if (existingTouchListener) {
          sceneContainer.removeEventListener('touchstart', existingTouchListener);
        }
        
        sceneContainer.addEventListener('click', clickHandler);
        sceneContainer.addEventListener('touchstart', touchHandler);
        sceneContainer._enhancedClickListener = clickHandler;
        sceneContainer._enhancedTouchListener = touchHandler;
      }
    };
    
    // Apply enhancements after component mounts and whenever route changes
    enhanceMobileInteraction();
    enhanceMinimizedModel();
    
    // Observe DOM changes to detect when new elements are added or attributes change
    const observer = new MutationObserver((mutations) => {
      let shouldEnhanceInteraction = false;
      let shouldEnhanceMinimizedModel = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
          shouldEnhanceInteraction = true;
        }
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-is-minimized') {
          shouldEnhanceMinimizedModel = true;
        }
      });
      
      if (shouldEnhanceInteraction) enhanceMobileInteraction();
      if (shouldEnhanceMinimizedModel) enhanceMinimizedModel();
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['data-is-minimized']
    });
    
    // Improve touch behavior for TrackballControls
    const improveTrackballControls = () => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        // Prevent default touch behavior on canvas to avoid scrolling while interacting with 3D
        canvas.addEventListener('touchmove', (e) => {
          if (e.target === canvas) {
            e.preventDefault();
          }
        }, { passive: false });
      }
    };
    
    improveTrackballControls();
    
    // Cleanup function
    return () => {
      observer.disconnect();
      // Remove any added touch enhancers
      document.querySelectorAll('.touch-enhancer').forEach(el => el.remove());
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
};

export default MobileEnhancer;