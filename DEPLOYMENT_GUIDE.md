# 🚀 游戏网站快速部署指南

## 📋 变量替换清单

在使用模板创建新游戏网站时，需要将以下变量替换为实际值：

### **基础信息变量**
```
[GAME_NAME] = 游戏英文名称（如：Sand Crush）
[GAME_CHINESE_NAME] = 游戏中文名称（如：沙粒粉碎）
[DOMAIN_NAME] = 网站域名（如：playsandcrush.xyz）
[COMPANY_NAME] = 公司/开发者名称（如：Sandcrush Game Studio）
[CURRENT_DATE] = 当前日期（格式：YYYY-MM-DD）
```

### **游戏相关变量**
```
[GAME_IFRAME_URL] = 游戏iframe链接
[GAME_TAGLINE] = 游戏标语（如：Ultimate Physics Puzzle Game）
[GAME_DESCRIPTION_150_CHARS] = 150字符以内的游戏描述（用于meta description）
[GAME_DESCRIPTION_LONG] = 详细游戏描述（用于结构化数据）
[HERO_DESCRIPTION_WITH_KEYWORDS] = Hero区域描述（包含关键词）
```

### **SEO关键词变量**
```
[KEYWORD_1] = 主关键词
[KEYWORD_2] = 关键词2
[KEYWORD_3] = 关键词3
[KEYWORD_4] = 关键词4
[KEYWORD_5] = 关键词5
```

### **设计变量**
```
[PRIMARY_COLOR] = 主色调（如：#4CAF50）
[SECONDARY_COLOR] = 辅助色（如：#45a049）
[ACCENT_COLOR] = 强调色（如：#ff6b6b）
[TEXT_COLOR] = 文字颜色（如：#333）
[LIGHT_TEXT_COLOR] = 浅色文字（如：#666）
[BG_COLOR] = 背景色（如：#f4f4f4）
[BORDER_COLOR] = 边框色（如：#ddd）
```

### **内容变量**
```
[WEBSITE_TAGLINE] = 网站标语
[FOOTER_DESCRIPTION] = Footer描述
[HERO_DESCRIPTION_WITH_KEYWORDS] = Hero区域描述
[WHAT_IS_PARAGRAPH_1_WITH_KEYWORDS] = What is第一段
[WHAT_IS_PARAGRAPH_2_WITH_KEYWORDS] = What is第二段
[WHAT_IS_POINT_1] = What is要点1
[WHAT_IS_POINT_2] = What is要点2  
[WHAT_IS_POINT_3] = What is要点3
```

### **功能特色变量**
```
[FEATURE_1_TITLE] = 功能1标题
[FEATURE_1_DESCRIPTION] = 功能1描述
[FEATURE_2_TITLE] = 功能2标题
[FEATURE_2_DESCRIPTION] = 功能2描述
[FEATURE_3_TITLE] = 功能3标题
[FEATURE_3_DESCRIPTION] = 功能3描述
[FEATURE_4_TITLE] = 功能4标题
[FEATURE_4_DESCRIPTION] = 功能4描述
```

### **游戏步骤变量**
```
[STEP_1_TITLE] = 游戏步骤1标题
[STEP_1_DESCRIPTION] = 游戏步骤1描述
[STEP_2_TITLE] = 游戏步骤2标题
[STEP_2_DESCRIPTION] = 游戏步骤2描述
[STEP_3_TITLE] = 游戏步骤3标题
[STEP_3_DESCRIPTION] = 游戏步骤3描述
[STEP_4_TITLE] = 游戏步骤4标题
[STEP_4_DESCRIPTION] = 游戏步骤4描述
```

### **优势特点变量**
```
[BENEFIT_1_TITLE] = 优势1标题
[BENEFIT_1_DESCRIPTION] = 优势1描述
[BENEFIT_2_TITLE] = 优势2标题
[BENEFIT_2_DESCRIPTION] = 优势2描述
[BENEFIT_3_TITLE] = 优势3标题
[BENEFIT_3_DESCRIPTION] = 优势3描述
[BENEFIT_4_TITLE] = 优势4标题
[BENEFIT_4_DESCRIPTION] = 优势4描述
```

### **FAQ变量**
```
[FAQ_1_QUESTION] = FAQ问题1
[FAQ_1_ANSWER] = FAQ答案1
[FAQ_2_QUESTION] = FAQ问题2
[FAQ_2_ANSWER] = FAQ答案2
[FAQ_3_QUESTION] = FAQ问题3
[FAQ_3_ANSWER] = FAQ答案3
[FAQ_4_QUESTION] = FAQ问题4
[FAQ_4_ANSWER] = FAQ答案4
```

### **社交媒体变量**
```
[FACEBOOK_URL] = Facebook页面链接
[TWITTER_URL] = Twitter账号链接
[INSTAGRAM_URL] = Instagram账号链接
[YOUTUBE_URL] = YouTube频道链接
```

### **评分变量**
```
[RATING_VALUE] = 平均评分（如：4.8）
[RATING_COUNT] = 评分数量（如：1250）
```

### **域名变量**
```
[GAME_DOMAIN] = 游戏服务器域名（用于preconnect）
```

## 🔧 快速替换工具

### **方法1：使用VS Code全局替换**
1. 复制模板文件到新项目目录
2. 在VS Code中打开项目
3. 使用Ctrl+Shift+F打开全局搜索替换
4. 逐个替换上述变量

### **方法2：使用PowerShell脚本（Windows）**
```powershell
# 创建替换脚本 replace-variables.ps1
param(
    [string]$ProjectPath,
    [string]$GameName,
    [string]$DomainName,
    [string]$GameIframeUrl,
    # 添加更多参数...
)

# 替换函数
function Replace-Variables {
    param($FilePath, $Replacements)
    
    $content = Get-Content $FilePath -Raw
    foreach ($replacement in $Replacements.GetEnumerator()) {
        $content = $content -replace $replacement.Key, $replacement.Value
    }
    Set-Content $FilePath $content
}

# 定义替换映射
$replacements = @{
    '\[GAME_NAME\]' = $GameName
    '\[DOMAIN_NAME\]' = $DomainName
    '\[GAME_IFRAME_URL\]' = $GameIframeUrl
    # 添加更多替换...
}

# 处理所有文件
Get-ChildItem $ProjectPath -Recurse -File | ForEach-Object {
    Replace-Variables $_.FullName $replacements
}
```

### **方法3：创建配置文件**
创建`config.json`文件：
```json
{
  "GAME_NAME": "Your Game Name",
  "DOMAIN_NAME": "yourgame.com",
  "GAME_IFRAME_URL": "https://example.com/game.embed",
  "PRIMARY_COLOR": "#4CAF50",
  "SECONDARY_COLOR": "#45a049",
  "ACCENT_COLOR": "#ff6b6b",
  "GAME_TAGLINE": "Your Game Tagline",
  "GAME_DESCRIPTION_150_CHARS": "Your game description under 150 characters",
  "COMPANY_NAME": "Your Company Name"
}
```

## ⚡ 快速部署步骤

### **第1步：项目初始化**
```bash
# 创建新项目目录
mkdir your-new-game
cd your-new-game

# 复制模板文件
cp -r ../sandcrush/templates/* .
```

### **第2步：重命名模板文件**
```bash
# 重命名模板文件
mv index-template.html index.html
mv styles-template.css styles.css
mv script-template.js script.js
mv sitemap-template.xml sitemap.xml
mv robots-template.txt robots.txt
```

### **第3步：变量替换**
使用上述替换方法替换所有变量

### **第4步：内容验证**
- [ ] 检查所有链接是否正确
- [ ] 验证游戏iframe是否正常加载
- [ ] 测试响应式设计
- [ ] 验证SEO标签

### **第5步：部署前检查**
- [ ] 压缩CSS/JS文件
- [ ] 优化图片资源
- [ ] 验证HTML语法
- [ ] 测试加载速度

## 📊 SEO检查清单

### **技术SEO**
- [ ] 所有页面有唯一的title标签
- [ ] Meta description长度在150-160字符
- [ ] 使用语义化HTML标签
- [ ] 设置canonical URL
- [ ] 创建sitemap.xml
- [ ] 配置robots.txt

### **内容SEO**
- [ ] 主关键词密度3.5-4%
- [ ] 每页有明确的H1标签
- [ ] 使用相关长尾关键词
- [ ] 内部链接建设

### **结构化数据**
- [ ] WebApplication Schema
- [ ] FAQPage Schema
- [ ] Organization Schema

## 🚀 性能优化建议

### **加载速度优化**
- [ ] 启用Gzip压缩
- [ ] 使用CDN加速
- [ ] 优化图片格式和大小
- [ ] 启用浏览器缓存

### **用户体验优化**
- [ ] 确保移动端友好
- [ ] 游戏加载状态提示
- [ ] 快速导航菜单
- [ ] 清晰的CTA按钮

---

*使用此模板可以快速创建专业的游戏网站，确保SEO优化和用户体验最佳实践。*
