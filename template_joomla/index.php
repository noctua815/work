<?php
defined('_JEXEC') or die;
?>

<?php echo '<?'; ?>xml version="1.0" encoding="<?php echo $this->_charset ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>"
<head>
	<jdoc:include type="head" />
	<?php $this->setGenerator('solodka'); ?>
	<meta name=viewport content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="description" content="Солодка - Персональный сайт Старокожко Л.Е.">
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/style.css" type="text/css" />
	<?php 
	if($this->countModules('aside-menu') == 0) $contentwidth = "100";
	?>
	<script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
	<!--TOP HEADER-->
	<header class="top-head">
		<div class="layout-positioner">
			<jdoc:include type="modules" name="top-head" style="xhtml"/>
		</div>
	</header>
	<!--HEADER NAV-->
	<nav class="head-nav">
		<div class="layout-positioner">
			<jdoc:include type="modules" name="header-nav" style="xhtml"/>
		</div>
	</nav>
	<!--MAIN CONTENT-->
	<main>
		<div class="layout-positioner">
			<!--SLIDER-->
			<?php if($this->countModules('slider')) : ?>
				<section class="slider">
					<jdoc:include type="modules" name="slider" style="xhtml"/>
				</section>
			<?php endif; ?>
			<!--SITE DESC-->
			<?php if($this->countModules('site-desc')) : ?>
			<section class="site-desc">
				<jdoc:include type="modules" name="site-desc" style="xhtml"/>
			</section>
			<?php endif; ?>
			<!--CONTENT-->
			<section class="content-page">
				<?php if($this->countModules('aside-menu')) : ?>
					<aside class="menu">
						<jdoc:include type="modules" name="aside-menu" style="xhtml"/>
					</aside>
				<?php endif; ?>
				<article class="content content<?php echo $contentwidth; ?>">
					<jdoc:include type="modules" name="content" style="xhtml" />
					<jdoc:include type="message" /> 
					<jdoc:include type="component" />
				</article>
				
			</section>
		</div>
	</main>
	<!--FOOTER-->
	<footer class="footer-info">
		<div class="layout-positioner">
			<jdoc:include type="modules" name="footer-info" style="xhtml" />
		</div>
	</footer>
	<footer class="footer-bottom">
		<jdoc:include type="modules" name="footer-bottom" style="xhtml" />
	</footer>
</body>
</html>