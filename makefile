all: compile

PACKAGE_MANAGER=npm
DIST=dist
SOURCE=src

dev: $(SOURCE)/*	## Enter in developer mode
	$(PACKAGE_MANAGER) run dev

compile: src/* ## Compile the Website all themes
	$(PACKAGE_MANAGER) run build

clean: $(DIST)/*  ## Clean the folder dist
	rm -rf $(DIST)/*

help: ## Show this Message
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

test:
	@echo "Hey, this is a test"
