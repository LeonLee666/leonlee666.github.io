function search() {
    const searchText = document.getElementById('searchInput').value;
    const keywords = searchText.split(' ').filter(keyword => keyword.trim()!== '');
    
    // 修改关键词处理方式，使用 "title:x | title:y | title:z" 的格式
    const keywordPart = keywords.length > 0 
        ? keywords.map(keyword => `title:${keyword}`).join(' | ') 
        : '';

    // Select all checked checkboxes that are NOT 'Select All' checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked:not([id$="SelectAll"])');
    let selectedValues = [];
    
    // Track values to prevent duplicates
    let addedValues = new Set();
    
    checkboxes.forEach(checkbox => {
        // Use the checkbox value directly
        if (checkbox.value && !checkbox.classList.contains('assoc-journal')) {
            const value = `streamid:${checkbox.value.toLowerCase()}:`;
            if (!addedValues.has(value)) {
                selectedValues.push(value);
                addedValues.add(value);
            }
        }
        
        // Check if there's an associated journal checkbox and include its value if checked
        const assocCheckbox = document.getElementById(checkbox.id + '-assoc');
        if (assocCheckbox && assocCheckbox.checked && assocCheckbox.value) {
            const value = `streamid:${assocCheckbox.value.toLowerCase()}:`;
            if (!addedValues.has(value)) {
                selectedValues.push(value);
                addedValues.add(value);
            }
        }
    });

    const checkboxPart = selectedValues.join(' | ');

    let result = '';
    if (keywordPart && checkboxPart) {
        result = `${keywordPart} ${checkboxPart}`;
    } else {
        result = keywordPart || checkboxPart;
    }

    if (!result) {
        alert("请输入关键词或选择会议类别!");
        return;
    }

    const searchUrl = `https://dblp.org/search?q=${encodeURIComponent(result)}`;
    window.open(searchUrl, '_blank');
}

// Generic function to toggle checkboxes within a category
function toggleCategoryCheckboxes(categoryClass, isChecked) {
    const checkboxes = document.querySelectorAll(`.${categoryClass}`);
    checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
         // Also toggle associated checkbox if it exists
        toggleAssociatedCheckbox(checkbox);
    });
}

// Function to toggle associated hidden/journal checkbox
function toggleAssociatedCheckbox(mainCheckbox) {
    const associatedCheckbox = document.getElementById(mainCheckbox.id + '-assoc');
    if (associatedCheckbox) {
        associatedCheckbox.checked = mainCheckbox.checked;
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        search(); // Trigger search on Enter key press
    }
}

// Generate checkbox UI from config
function generateCheckboxes() {
    const container = document.getElementById('checkboxContainer');
    
    categoriesConfig.forEach((section, sectionIndex) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'checkbox-section';
        
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.name;
        sectionDiv.appendChild(sectionTitle);
        
        // Create categories (A类, B类)
        section.categories.forEach((category, categoryIndex) => {
            const categoryContainer = document.createElement('div');
            categoryContainer.className = 'category-container';
            
            // Create category header
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            
            const categoryTitle = document.createElement('div');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = category.name;
            categoryHeader.appendChild(categoryTitle);
            
            // Create select all container
            const selectAllContainer = document.createElement('div');
            selectAllContainer.className = 'select-all-container';
            
            const catId = `cat${sectionIndex+1}${category.level.toLowerCase()}`;
            const selectAllId = `${catId}SelectAll`;
            
            const selectAllCheckbox = document.createElement('input');
            selectAllCheckbox.type = 'checkbox';
            selectAllCheckbox.id = selectAllId;
            selectAllCheckbox.setAttribute('onchange', `toggleCategoryCheckboxes('${catId}', this.checked)`);
            
            const selectAllLabel = document.createElement('label');
            selectAllLabel.setAttribute('for', selectAllId);
            selectAllLabel.textContent = '全选';
            
            selectAllContainer.appendChild(selectAllCheckbox);
            selectAllContainer.appendChild(selectAllLabel);
            categoryHeader.appendChild(selectAllContainer);
            categoryContainer.appendChild(categoryHeader);
            
            // Create options columns
            const optionsColumns = document.createElement('div');
            optionsColumns.className = 'option-columns';
            if (category.options.length > 12) {
                optionsColumns.classList.add('option-columns-wide');
            }
            
            // Create each checkbox option
            category.options.forEach((option, optionIndex) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const checkboxId = `${catId}Opt${optionIndex+1}`;
                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = catId;
                checkbox.id = checkboxId;
                checkbox.value = option.value;
                
                if (option.hasAssociatedJournal) {
                    checkbox.setAttribute('onchange', 'toggleAssociatedCheckbox(this)');
                    
                    // Create associated hidden checkbox for journal
                    const assocCheckbox = document.createElement('input');
                    assocCheckbox.type = 'checkbox';
                    assocCheckbox.className = 'assoc-journal';
                    assocCheckbox.id = `${checkboxId}-assoc`;
                    assocCheckbox.value = option.associatedJournalValue;
                    optionDiv.appendChild(assocCheckbox);
                }
                
                const label = document.createElement('label');
                label.setAttribute('for', checkboxId);
                label.textContent = option.label;
                
                optionDiv.appendChild(checkbox);
                optionDiv.appendChild(label);
                optionsColumns.appendChild(optionDiv);
            });
            
            categoryContainer.appendChild(optionsColumns);
            sectionDiv.appendChild(categoryContainer);
        });
        
        container.appendChild(sectionDiv);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    generateCheckboxes();
    
    // Add event listeners to labels to toggle checkboxes
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.addEventListener('click', function(event) {
            const checkboxId = this.getAttribute('for');
            if (checkboxId && event.target === this) {
                // Prevent double toggling if clicking directly on checkbox
            }
        });
    });
}); 